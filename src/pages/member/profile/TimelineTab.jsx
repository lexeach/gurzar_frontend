import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Avatar,
  Stack,
  Box,
  Chip,
} from "@mui/material";

import {
  PersonAdd,
  VerifiedUser,
  Edit,
  Login,
  SwapHoriz,
  CardMembership,
  Description,
} from "@mui/icons-material";

const iconMap = {
  registration: <PersonAdd />,
  document: <Description />,
  verification: <VerifiedUser />,
  update: <Edit />,
  renewal: <CardMembership />,
  transfer: <SwapHoriz />,
  login: <Login />,
};

const colorMap = {
  registration: "#1976D2",
  document: "#FB8C00",
  verification: "#2E7D32",
  update: "#8E24AA",
  renewal: "#00897B",
  transfer: "#EF6C00",
  login: "#546E7A",
};

export default function TimelineTab({ member }) {

  if (!member) return null;

  const timeline =
    member.timeline || [
      {
        id: 1,
        type: "registration",
        title: "Member Registration",
        description:
          "Member registration completed successfully.",
        date: "05 Jul 2026",
        time: "10:15 AM",
        by: "Super Admin",
      },
      {
        id: 2,
        type: "document",
        title: "Documents Uploaded",
        description:
          "All required KYC documents uploaded.",
        date: "05 Jul 2026",
        time: "10:20 AM",
        by: "Member",
      },
      {
        id: 3,
        type: "verification",
        title: "KYC Verified",
        description:
          "Identity verification completed.",
        date: "06 Jul 2026",
        time: "09:30 AM",
        by: "State Admin",
      },
      {
        id: 4,
        type: "update",
        title: "Profile Updated",
        description:
          "Mobile number updated.",
        date: "08 Jul 2026",
        time: "04:15 PM",
        by: "District Admin",
      },
      {
        id: 5,
        type: "renewal",
        title: "Membership Renewed",
        description:
          "Membership renewed for one year.",
        date: "10 Jul 2026",
        time: "11:00 AM",
        by: "System",
      },
      {
        id: 6,
        type: "login",
        title: "Latest Login",
        description:
          "Member logged into the portal.",
        date: "12 Jul 2026",
        time: "08:40 PM",
        by: "Member",
      },
    ];

  return (

    <Card
      sx={{
        borderRadius: 4,
      }}
    >

      <CardContent>

        <Typography
          variant="h5"
          fontWeight={700}
        >
          Member Timeline
        </Typography>

        <Typography
          color="text.secondary"
          mb={4}
        >
          Complete chronological history of member activities.
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Stack spacing={4}>

          {timeline.map((item, index) => (

            <Stack
              key={item.id}
              direction="row"
              spacing={3}
              alignItems="flex-start"
            >

              <Stack
                alignItems="center"
              >

                <Avatar
                  sx={{
                    bgcolor:
                      colorMap[item.type],
                    width: 50,
                    height: 50,
                  }}
                >
                  {iconMap[item.type]}
                </Avatar>

                {index !==
                  timeline.length - 1 && (

                  <Box
                    sx={{
                      width: 2,
                      height: 70,
                      bgcolor: "#E0E0E0",
                      mt: 1,
                    }}
                  />

                )}

              </Stack>

              <Box flex={1}>

                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  {item.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                >
                  {item.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  mt={2}
                  flexWrap="wrap"
                  useFlexGap
                >

                  <Chip
                    label={item.date}
                    color="primary"
                    size="small"
                  />

                  <Chip
                    label={item.time}
                    size="small"
                  />

                  <Chip
                    label={`By: ${item.by}`}
                    color="success"
                    size="small"
                  />

                </Stack>

              </Box>

            </Stack>

          ))}

        </Stack>

      </CardContent>

    </Card>

  );

}