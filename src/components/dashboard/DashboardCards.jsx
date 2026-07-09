import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const getCards = (level) => {
  switch (level) {
    case "STATE":
      return [
        { title: "Districts", value: 52 },
        { title: "Members", value: 254860 },
        { title: "Committees", value: 4321 },
        { title: "Active Users", value: 842 },
      ];

    case "DISTRICT":
      return [
        { title: "Tehsils", value: 14 },
        { title: "Villages", value: 182 },
        { title: "Members", value: 15480 },
        { title: "Committees", value: 286 },
      ];

    case "TEHSIL":
      return [
        { title: "Villages", value: 28 },
        { title: "Members", value: 3280 },
        { title: "Committees", value: 58 },
        { title: "Events", value: 12 },
      ];

    case "VILLAGE":
      return [
        { title: "Families", value: 540 },
        { title: "Members", value: 1280 },
        { title: "Youth", value: 420 },
        { title: "Women", value: 390 },
      ];

    default:
      return [
        { title: "Profile", value: "Active" },
        { title: "Events", value: 6 },
        { title: "Tasks", value: 4 },
        { title: "Committee", value: "Village" },
      ];
  }
};

export default function DashboardCards({ level }) {

  const cards = getCards(level);

  return (
    <Grid container spacing={2}>
      {cards.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">
                {item.title}
              </Typography>

              <Typography variant="h4" fontWeight={700}>
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}