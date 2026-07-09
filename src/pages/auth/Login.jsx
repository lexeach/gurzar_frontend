import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
  CircularProgress,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  Person,
  Lock,
} from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#F4F7FC",
      }}
    >
      {/* Left Panel */}

      <Box
        sx={{
          width: { xs: 0, md: "55%" },
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg,#0B5ED7,#4D8DFF)",
          color: "#fff",
          p: 6,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            gutterBottom
          >
            Digital Organizational
            Management System
          </Typography>

          <Typography variant="h6">
            Enterprise Platform for
            Organization Management,
            Member Registration,
            Hierarchy Control,
            Reports & Analytics.
          </Typography>
        </Box>
      </Box>

      {/* Right Panel */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 430,
            p: 5,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
          >
            Welcome Back
          </Typography>

          <Typography
            color="text.secondary"
            mb={3}
          >
            Login to continue
          </Typography>

          {error && (
            <Typography
              color="error"
              mb={2}
            >
              {error}
            </Typography>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              fullWidth
              margin="normal"
              label="Email / Mobile"
              {...register("username", {
                required: true,
              })}
              error={!!errors.username}
              helperText={
                errors.username &&
                "Required"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              {...register("password", {
                required: true,
              })}
              error={!!errors.password}
              helperText={
                errors.password &&
                "Required"
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              mt={2}
              mb={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
              />

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </Box>

            <Button
              fullWidth
              type="submit"
              size="large"
              variant="contained"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress
                  color="inherit"
                  size={24}
                />
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <Divider sx={{ my: 4 }} />

          <Typography
            align="center"
            color="text.secondary"
          >
            Powered by
          </Typography>

          <Typography
            align="center"
            fontWeight={700}
          >
            Autasis Edutech Pvt. Ltd.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}