import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Box,
  Stack,
  Typography,
  Chip,
  Divider,
} from "@mui/material";

import {
  PersonAdd,
  VerifiedUser,
  Edit,
  Delete,
  Login,
  Logout,
  Description,
  Groups,
} from "@mui/icons-material";

import { useSelector } from "react-redux";

const iconMap = {
  registration: <PersonAdd />,
  verification: <VerifiedUser />,
  update: <Edit />,
  delete: <Delete />,
  login: <Login />,
  logout: <Logout />,
  document: <Description />,
  member: <Groups />,
};

const colorMap = {
  registration: "#1976D2",
  verification: "#2E7D32",
  update: "#F57C00",
  delete: "#D32F2F",
  login: "#009688",
  logout: "#607D8B",
  document: "#8E24AA",
  member: "#5E35B1",
};

export default function RecentActivities() {

  const { recentActivities } = useSelector(
    (state) => state.dashboard
  );

  // Demo data until backend is connected
  const activities =
    recentActivities.length > 0
      ? recentActivities
      : [
          {
            id: 1,
            type: "registration",
            title: "New Member Registered",
            description:
              "Rahul Gurjar successfully registered.",
            user: "Admin",
            time: "2 min ago",
          },
          {
            id: 2,
            type: "verification",
            title: "KYC Approved",
            description:
              "KYC approved for Member ID DOMS000124.",
            user: "State Admin",
            time: "15 min ago",
          },
          {
            id: 3,
            type: "update",
            title: "Profile Updated",
            description:
              "District details updated.",
            user: "District Admin",
            time: "1 hour ago",
          },
          {
            id: 4,
            type: "document",
            title: "Document Uploaded",
            description:
              "Membership document uploaded.",
            user: "Member",
            time: "2 hours ago",
          },
          {
            id: 5,
            type: "login",
            title: "User Login",
            description:
              "Super Admin logged into the system.",
            user: "Administrator",
            time: "Today",
          },
        ];

  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardHeader
        title="Recent Activities"
        subheader="Latest System Activities"
      />

      <CardContent>

        <Stack spacing={2}>

          {activities.map((activity, index) => (

            <React.Fragment key={activity.id}>

              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >

                <Avatar
                  sx={{
                    bgcolor:
                      colorMap[activity.type],
                  }}
                >
                  {iconMap[activity.type]}
                </Avatar>

                <Box flex={1}>

                  <Typography
                    fontWeight={600}
                  >
                    {activity.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {activity.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    mt={1}
                  >

                    <Chip
                      label={activity.user}
                      size="small"
                    />

                    <Chip
                      label={activity.time}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />

                  </Stack>

                </Box>

              </Stack>

              {index !==
                activities.length - 1 && (
                <Divider />
              )}

            </React.Fragment>

          ))}

        </Stack>

      </CardContent>
    </Card>
  );
}