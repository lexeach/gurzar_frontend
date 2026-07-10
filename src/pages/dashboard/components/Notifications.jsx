import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Box,
  Chip,
  Stack,
  Divider,
  Button,
} from "@mui/material";

import {
  NotificationsIcon,
  Warning,
  Info,
  CheckCircle,
  Error,
} from "@mui/icons-material";

import { useSelector } from "react-redux";

const iconMap = {
  info: <Info />,
  warning: <Warning />,
  success: <CheckCircle />,
  error: <Error />,
};

const colorMap = {
  info: "#1976D2",
  warning: "#ED6C02",
  success: "#2E7D32",
  error: "#D32F2F",
};

export default function Notifications() {

  const { notifications } = useSelector(
    (state) => state.dashboard
  );

  const data =
    notifications.length > 0
      ? notifications
      : [
          {
            id: 1,
            type: "warning",
            title: "Pending KYC",
            message:
              "248 members are waiting for KYC verification.",
            time: "5 min ago",
            read: false,
          },
          {
            id: 2,
            type: "info",
            title: "New Registrations",
            message:
              "325 new members joined today.",
            time: "30 min ago",
            read: false,
          },
          {
            id: 3,
            type: "success",
            title: "Backup Completed",
            message:
              "Daily database backup completed successfully.",
            time: "Today",
            read: true,
          },
          {
            id: 4,
            type: "error",
            title: "SMS Gateway",
            message:
              "SMS gateway response time is high.",
            time: "Today",
            read: false,
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
        avatar={<Notifications color="primary" />}
        title="Notifications"
        subheader={`${data.filter(n => !n.read).length} unread notifications`}
      />

      <CardContent>

        <Stack spacing={2}>

          {data.map((item, index) => (

            <React.Fragment key={item.id}>

              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >

                <Avatar
                  sx={{
                    bgcolor: colorMap[item.type],
                    width: 42,
                    height: 42,
                  }}
                >
                  {iconMap[item.type]}
                </Avatar>

                <Box flex={1}>

                  <Typography
                    fontWeight={600}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={0.5}
                  >
                    {item.message}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    mt={1}
                  >

                    <Chip
                      label={item.time}
                      size="small"
                      variant="outlined"
                    />

                    {!item.read && (
                      <Chip
                        label="Unread"
                        size="small"
                        color="error"
                      />
                    )}

                  </Stack>

                </Box>

              </Stack>

              {index !== data.length - 1 && (
                <Divider />
              )}

            </React.Fragment>

          ))}

        </Stack>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
          }}
        >
          View All Notifications
        </Button>

      </CardContent>

    </Card>
  );

}