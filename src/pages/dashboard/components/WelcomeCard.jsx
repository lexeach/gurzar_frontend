import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Chip,
  Stack,
  Button,
} from "@mui/material";

import {
  Person,
  TrendingUp,
  Groups,
  NotificationsActive,
  ArrowForward,
} from "@mui/icons-material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function WelcomeCard() {
  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <Box
      sx={{
        mb: 3,
        p: 4,
        borderRadius: 4,
        color: "#fff",
        background:
          "linear-gradient(135deg,#0B5ED7,#2F80ED)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="center">

        {/* Left */}

        <Grid item xs={12} md={8}>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            mb={2}
          >
            <Avatar
              src={user?.photo}
              sx={{
                width: 72,
                height: 72,
                bgcolor: "#fff",
                color: "#0B5ED7",
              }}
            >
              <Person />
            </Avatar>

            <Box>

              <Typography
                variant="h4"
                fontWeight={700}
              >
                Welcome,
                {" "}
                {user?.name || "Administrator"}
              </Typography>

              <Typography
                sx={{
                  opacity: .9,
                }}
              >
                Digital Organizational
                Management System
              </Typography>

            </Box>

          </Stack>

          <Typography
            sx={{
              mb: 3,
              maxWidth: 700,
              lineHeight: 1.8,
            }}
          >
            Manage your complete organizational
            hierarchy, members, reports,
            communication and analytics from one
            centralized enterprise dashboard.
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
          >

            <Chip
              label={
                user?.role ||
                "SUPER ADMIN"
              }
              color="warning"
            />

            <Chip
              label="Enterprise Edition"
              color="success"
            />

            <Chip
              label="DOMS v1.0"
              color="secondary"
            />

          </Stack>

        </Grid>

        {/* Right */}

        <Grid
          item
          xs={12}
          md={4}
        >

          <Stack spacing={2}>

            <Box
              sx={{
                bgcolor:
                  "rgba(255,255,255,.15)",
                p: 2,
                borderRadius: 3,
              }}
            >

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >

                <Groups />

                <Box>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                  >
                    10,25,486
                  </Typography>

                  <Typography>
                    Total Members
                  </Typography>

                </Box>

              </Stack>

            </Box>

            <Box
              sx={{
                bgcolor:
                  "rgba(255,255,255,.15)",
                p: 2,
                borderRadius: 3,
              }}
            >

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >

                <TrendingUp />

                <Box>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                  >
                    +325
                  </Typography>

                  <Typography>
                    Today's Registrations
                  </Typography>

                </Box>

              </Stack>

            </Box>

            <Button
              variant="contained"
              color="warning"
              endIcon={<ArrowForward />}
              onClick={() =>
                navigate("/member/new")
              }
            >
              Register New Member
            </Button>

          </Stack>

        </Grid>

      </Grid>

      {/* Floating Decoration */}

      <Box
        sx={{
          position: "absolute",
          right: -80,
          top: -80,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background:
            "rgba(255,255,255,.08)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          right: 40,
          bottom: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background:
            "rgba(255,255,255,.05)",
        }}
      />
    </Box>
  );
}