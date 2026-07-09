import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../services/axios";

const OTP_LENGTH = 6;

export default function OTPVerification() {

  const navigate = useNavigate();

  const [otp, setOtp] = useState(
    new Array(OTP_LENGTH).fill("")
  );

  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(120);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const inputRefs = useRef([]);

  /*
  --------------------------------------------------------
  Countdown
  --------------------------------------------------------
  */

  useEffect(() => {

    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);

  }, [timer]);

  /*
  --------------------------------------------------------
  Handle OTP
  --------------------------------------------------------
  */

  const handleChange = (value, index) => {

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }

  };

  /*
  --------------------------------------------------------
  Backspace
  --------------------------------------------------------
  */

  const handleKeyDown = (e, index) => {

    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1].focus();
    }

  };

  /*
  --------------------------------------------------------
  Verify OTP
  --------------------------------------------------------
  */

  const verifyOTP = async () => {

    try {

      setLoading(true);

      setError("");

      const code = otp.join("");

      const response = await api.post(
        "/auth/verify-otp",
        {
          otp: code,
        }
      );

      setSuccess(response.data.message);

      setTimeout(() => {

        navigate("/login");

      }, 1500);

    } catch (err) {

      setError(
        err.response?.data?.message ||
          "Invalid OTP."
      );

    } finally {

      setLoading(false);

    }

  };

  /*
  --------------------------------------------------------
  Resend OTP
  --------------------------------------------------------
  */

  const resendOTP = async () => {

    try {

      await api.post("/auth/resend-otp");

      setTimer(120);

      setSuccess("OTP Sent Successfully");

    } catch {

      setError("Unable to resend OTP.");

    }

  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#F4F7FC",
        p: 3,
      }}
    >

      <Paper
        sx={{
          width: 520,
          p: 5,
          borderRadius: 4,
        }}
      >

        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
        >
          OTP Verification
        </Typography>

        <Typography
          color="text.secondary"
          mb={4}
        >
          Enter the 6-digit verification code.
        </Typography>

        {success && (
          <Alert
            severity="success"
            sx={{ mb: 2 }}
          >
            {success}
          </Alert>
        )}

        {error && (
          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )}

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
        >

          {otp.map((digit, index) => (

            <TextField
              key={index}
              inputRef={(el) =>
                (inputRefs.current[index] = el)
              }
              value={digit}
              onChange={(e) =>
                handleChange(
                  e.target.value,
                  index
                )
              }
              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: 28,
                  fontWeight: 700,
                },
              }}
              sx={{
                width: 60,
              }}
            />

          ))}

        </Stack>

        <Typography
          align="center"
          mt={3}
          color="text.secondary"
        >
          Time Remaining : {timer} sec
        </Typography>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 4 }}
          onClick={verifyOTP}
          disabled={
            loading ||
            otp.join("").length < OTP_LENGTH
          }
        >

          {loading ? (
            <CircularProgress
              color="inherit"
              size={22}
            />
          ) : (
            "Verify OTP"
          )}

        </Button>

        <Button
          fullWidth
          sx={{ mt: 2 }}
          disabled={timer > 0}
          onClick={resendOTP}
        >
          Resend OTP
        </Button>

      </Paper>

    </Box>

  );

}
