import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

import {
  Edit,
  Print,
  PictureAsPdf,
  QrCode2,
  Phone,
  Email,
  VerifiedUser,
  CalendarMonth,
  Badge,
  LocationOn,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function ProfileHeader({ member }) {

  const navigate = useNavigate();

  if (!member) return null;

  const completion = member.profileCompletion || 92;

  return (

    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
      }}
    >

      {/* Top Banner */}

      <Box
        sx={{
          height: 140,
          background:
            "linear-gradient(135deg,#1565C0,#42A5F5)",
        }}
      />

      <CardContent>

        <Grid
          container
          spacing={3}
        >

          {/* Left */}

          <Grid
            item
            xs={12}
            md={8}
          >

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={3}
            >

              <Avatar
                src={member.photo}
                sx={{
                  width: 140,
                  height: 140,
                  mt: -10,
                  border: "5px solid white",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,.25)",
                }}
              >
                {member.name?.charAt(0)}
              </Avatar>

              <Box flex={1}>

                <Typography
                  variant="h4"
                  fontWeight={700}
                >
                  {member.name}
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                >
                  Member ID :
                  {" "}
                  <b>{member.memberId}</b>
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  mt={2}
                  flexWrap="wrap"
                >

                  <Chip
                    color="success"
                    icon={<VerifiedUser />}
                    label={
                      member.status ||
                      "Verified"
                    }
                  />

                  <Chip
                    color="primary"
                    label={
                      member.membershipType ||
                      "Primary Member"
                    }
                  />

                  <Chip
                    color="secondary"
                    label={
                      member.role ||
                      "Member"
                    }
                  />

                </Stack>

                <Stack
                  spacing={1}
                  mt={3}
                >

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >

                    <Phone
                      color="primary"
                      fontSize="small"
                    />

                    <Typography>

                      {member.mobile}

                    </Typography>

                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >

                    <Email
                      color="primary"
                      fontSize="small"
                    />

                    <Typography>

                      {member.email}

                    </Typography>

                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >

                    <LocationOn
                      color="primary"
                      fontSize="small"
                    />

                    <Typography>

                      {member.village},
                      {" "}
                      {member.district},
                      {" "}
                      {member.state}

                    </Typography>

                  </Stack>

                </Stack>

              </Box>

            </Stack>

          </Grid>

          {/* Right */}

          <Grid
            item
            xs={12}
            md={4}
          >

            <Stack spacing={2}>

              <Button

                fullWidth

                variant="contained"

                startIcon={<Edit />}

                onClick={() =>
                  navigate(
                    `/member/edit/${member.id}`
                  )
                }

              >
                Edit Profile
              </Button>

              <Button

                fullWidth

                variant="outlined"

                startIcon={<QrCode2 />}

              >
                QR Membership Card
              </Button>

              <Button

                fullWidth

                variant="outlined"

                startIcon={<Print />}

              >
                Print Card
              </Button>

              <Button

                fullWidth

                variant="outlined"

                startIcon={<PictureAsPdf />}

              >
                Download PDF
              </Button>

            </Stack>

          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Statistics */}

        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            xs={6}
            md={3}
          >

            <Typography
              color="text.secondary"
            >
              Registration Date
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              mt={1}
            >

              <CalendarMonth />

              <Typography
                fontWeight={600}
              >
                {member.registrationDate}
              </Typography>

            </Stack>

          </Grid>

          <Grid
            item
            xs={6}
            md={3}
          >

            <Typography
              color="text.secondary"
            >
              Membership Status
            </Typography>

            <Typography
              mt={1}
              fontWeight={700}
            >
              {member.status}
            </Typography>

          </Grid>

          <Grid
            item
            xs={6}
            md={3}
          >

            <Typography
              color="text.secondary"
            >
              KYC Status
            </Typography>

            <Chip
              sx={{ mt: 1 }}
              color="success"
              label="Verified"
            />

          </Grid>

          <Grid
            item
            xs={6}
            md={3}
          >

            <Typography
              color="text.secondary"
            >
              Profile Completion
            </Typography>

            <Typography
              mt={1}
              fontWeight={700}
            >
              {completion}%
            </Typography>

            <LinearProgress
              value={completion}
              variant="determinate"
              sx={{
                mt: 1,
                height: 8,
                borderRadius: 5,
              }}
            />

          </Grid>

        </Grid>

      </CardContent>

    </Card>

  );

}