import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import {
  PersonAdd,
  Groups,
  Assessment,
  Campaign,
  AccountTree,
  Description,
  Settings,
  Dashboard,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Register Member",
    subtitle: "Add New Member",
    icon: <PersonAdd sx={{ fontSize: 34 }} />,
    color: "#1976D2",
    path: "/member/new",
  },
  {
    title: "Members",
    subtitle: "Manage Members",
    icon: <Groups sx={{ fontSize: 34 }} />,
    color: "#2E7D32",
    path: "/members",
  },
  {
    title: "Reports",
    subtitle: "Generate Reports",
    icon: <Assessment sx={{ fontSize: 34 }} />,
    color: "#ED6C02",
    path: "/reports",
  },
  {
    title: "Broadcast",
    subtitle: "SMS / WhatsApp",
    icon: <Campaign sx={{ fontSize: 34 }} />,
    color: "#8E24AA",
    path: "/sms",
  },
  {
    title: "Hierarchy",
    subtitle: "Organization Structure",
    icon: <AccountTree sx={{ fontSize: 34 }} />,
    color: "#00897B",
    path: "/state",
  },
  {
    title: "Documents",
    subtitle: "Verify Documents",
    icon: <Description sx={{ fontSize: 34 }} />,
    color: "#5D4037",
    path: "/documents/upload",
  },
  {
    title: "Settings",
    subtitle: "System Settings",
    icon: <Settings sx={{ fontSize: 34 }} />,
    color: "#D81B60",
    path: "/configuration",
  },
  {
    title: "Dashboard",
    subtitle: "Analytics",
    icon: <Dashboard sx={{ fontSize: 34 }} />,
    color: "#3949AB",
    path: "/",
  },
];

export default function QuickActions() {

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardHeader
        title="Quick Actions"
        subheader="Frequently Used Operations"
      />

      <CardContent>

        <Grid container spacing={2}>

          {actions.map((action) => (

            <Grid
              item
              xs={6}
              key={action.title}
            >

              <Paper
                elevation={0}
                onClick={() =>
                  navigate(action.path)
                }
                sx={{
                  p: 2,
                  cursor: "pointer",
                  textAlign: "center",
                  borderRadius: 3,
                  border: "1px solid #E5E7EB",
                  transition: ".3s",

                  "&:hover": {
                    transform:
                      "translateY(-6px)",
                    boxShadow:
                      "0 12px 25px rgba(0,0,0,.10)",
                  },
                }}
              >

                <Box
                  sx={{
                    width: 65,
                    height: 65,
                    borderRadius: "50%",
                    bgcolor: action.color,
                    color: "#fff",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {action.icon}
                </Box>

                <Typography
                  fontWeight={700}
                  variant="body1"
                >
                  {action.title}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {action.subtitle}
                </Typography>

              </Paper>

            </Grid>

          ))}

        </Grid>

      </CardContent>
    </Card>
  );
}