import React from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../../services/axios";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await api.post("/auth/forgot-password", data);

      setSuccess(
        "OTP has been sent successfully to your registered Email/Mobile."
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to process your request."
      );
    } finally {
      setLoading(false);
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
          width: 450,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
        >
          Forgot Password
        </Typography>

        <Typography
          color="text.secondary"
          mb={3}
        >
          Enter your registered Email or Mobile Number.
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

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            fullWidth
            label="Email / Mobile"
            margin="normal"
            {...register("username", {
              required: "Required",
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
            InputProps={{
              startAdornment: (
                <Email
                  sx={{ mr: 1 }}
                  color="action"
                />
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <CircularProgress
                color="inherit"
                size={22}
              />
            ) : (
              "Send OTP"
            )}
          </Button>
        </form>

        <Button
          fullWidth
          component={Link}
          to="/login"
          sx={{ mt: 2 }}
        >
          Back to Login
        </Button>
      </Paper>
    </Box>
  );
}