import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
} from "@mui/material";

import {
  Groups,
  PersonAdd,
  VerifiedUser,
  AccountTree,
  LocationCity,
  Apartment,
  HowToReg,
  TrendingUp,
} from "@mui/icons-material";

const statistics = [
  {
    title: "Total Members",
    value: "10,25,486",
    growth: "+12.4%",
    icon: <Groups />,
    color: "#1976D2",
  },
  {
    title: "Today's Registration",
    value: "325",
    growth: "+8.1%",
    icon: <PersonAdd />,
    color: "#2E7D32",
  },
  {
    title: "Verified Members",
    value: "9,86,240",
    growth: "+5.2%",
    icon: <VerifiedUser />,
    color: "#00897B",
  },
  {
    title: "States",
    value: "28",
    growth: "+0%",
    icon: <AccountTree />,
    color: "#7B1FA2",
  },
  {
    title: "Districts",
    value: "742",
    growth: "+2",
    icon: <LocationCity />,
    color: "#F57C00",
  },
  {
    title: "Tehsils",
    value: "4,315",
    growth: "+10",
    icon: <Apartment />,
    color: "#5D4037",
  },
  {
    title: "Village Units",
    value: "24,840",
    growth: "+152",
    icon: <HowToReg />,
    color: "#D81B60",
  },
  {
    title: "Growth Rate",
    value: "98.7%",
    growth: "Excellent",
    icon: <TrendingUp />,
    color: "#388E3C",
  },
];

export default function StatisticsCards() {
  return (
    <Grid container spacing={3}>
      {statistics.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={item.title}
        >
          <Card
            sx={{
              borderRadius: 4,
              transition: "0.3s",
              cursor: "pointer",
              height: "100%",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  "0 15px 35px rgba(0,0,0,.12)",
              },
            }}
          >
            <CardContent>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >

                <Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                    mt={1}
                  >
                    {item.value}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>

              </Stack>

              <Chip
                label={item.growth}
                color="success"
                size="small"
                sx={{
                  mt: 3,
                  fontWeight: 600,
                }}
              />

            </CardContent>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
}