import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Stack,
} from "@mui/material";

import {
  AddLocationAlt,
  LocationCity,
  AccountTree,
  HolidayVillage,
  HowToVote,
  SupervisorAccount,
  SwapHoriz,
  UploadFile,
  Download,
  Analytics,
  Assessment,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function QuickActions() {

  const navigate = useNavigate();

  const actions = [

    {
      title: "Add State",
      icon: <AddLocationAlt />,
      color: "primary",
      route: "/hierarchy/states/new",
    },

    {
      title: "Add District",
      icon: <LocationCity />,
      color: "success",
      route: "/hierarchy/districts/new",
    },

    {
      title: "Add Tehsil",
      icon: <AccountTree />,
      color: "warning",
      route: "/hierarchy/tehsils/new",
    },

    {
      title: "Add Village",
      icon: <HolidayVillage />,
      color: "secondary",
      route: "/hierarchy/villages/new",
    },

    {
      title: "Add Booth",
      icon: <HowToVote />,
      color: "info",
      route: "/hierarchy/booths/new",
    },

    {
      title: "Assign Executive",
      icon: <SupervisorAccount />,
      color: "primary",
      route: "/hierarchy/executives",
    },

    {
      title: "Transfer Members",
      icon: <SwapHoriz />,
      color: "warning",
      route: "/hierarchy/transfer",
    },

    {
      title: "Import Data",
      icon: <UploadFile />,
      color: "success",
      route: "/hierarchy/import",
    },

    {
      title: "Export Data",
      icon: <Download />,
      color: "secondary",
      route: "/hierarchy/export",
    },

    {
      title: "Analytics",
      icon: <Analytics />,
      color: "info",
      route: "/hierarchy/analytics",
    },

    {
      title: "Reports",
      icon: <Assessment />,
      color: "primary",
      route: "/hierarchy/reports",
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

        title="Quick Actions"

        subheader="Frequently used hierarchy operations"

      />

      <CardContent>

        <Grid
          container
          spacing={2}
        >

          {actions.map((item) => (

            <Grid
              item
              xs={12}
              sm={6}
              key={item.title}
            >

              <Button

                variant="contained"

                color={item.color}

                fullWidth

                startIcon={item.icon}

                sx={{
                  justifyContent: "flex-start",
                  py: 1.5,
                  textTransform: "none",
                  borderRadius: 2,
                }}

                onClick={() =>
                  navigate(item.route)
                }

              >

                {item.title}

              </Button>

            </Grid>

          ))}

        </Grid>

        <Stack
          spacing={2}
          mt={4}
        >

          <Button
            variant="outlined"
            fullWidth
          >
            Organization Tree
          </Button>

          <Button
            variant="outlined"
            fullWidth
          >
            Hierarchy Settings
          </Button>

          <Button
            variant="outlined"
            fullWidth
          >
            View Audit Logs
          </Button>

        </Stack>

      </CardContent>

    </Card>

  );

}