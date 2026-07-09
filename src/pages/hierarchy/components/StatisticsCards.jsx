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
  Public,
  LocationCity,
  AccountTree,
  HolidayVillage,
  HowToVote,
  Groups,
  SupervisorAccount,
  BusinessCenter,
  TrendingUp,
} from "@mui/icons-material";

const defaultStatistics = {

  totalStates: 28,

  totalDistricts: 742,

  totalTehsils: 4315,

  totalVillages: 24840,

  totalBooths: 82456,

  totalMembers: 1025486,

  totalExecutives: 852,

  totalCommittees: 114,

};

export default function StatisticsCards({

  statistics = defaultStatistics,

}) {

  const cards = [

    {

      title: "States",

      value: statistics.totalStates,

      icon: <Public />,

      color: "#1976D2",

      growth: "+2"

    },

    {

      title: "Districts",

      value: statistics.totalDistricts,

      icon: <LocationCity />,

      color: "#2E7D32",

      growth: "+12"

    },

    {

      title: "Tehsils",

      value: statistics.totalTehsils,

      icon: <AccountTree />,

      color: "#F57C00",

      growth: "+25"

    },

    {

      title: "Villages",

      value: statistics.totalVillages,

      icon: <HolidayVillage />,

      color: "#8E24AA",

      growth: "+145"

    },

    {

      title: "Booths",

      value: statistics.totalBooths,

      icon: <HowToVote />,

      color: "#00897B",

      growth: "+384"

    },

    {

      title: "Members",

      value: statistics.totalMembers.toLocaleString(),

      icon: <Groups />,

      color: "#D81B60",

      growth: "+12.8%"

    },

    {

      title: "Executives",

      value: statistics.totalExecutives,

      icon: <SupervisorAccount />,

      color: "#5D4037",

      growth: "+16"

    },

    {

      title: "Committees",

      value: statistics.totalCommittees,

      icon: <BusinessCenter />,

      color: "#3949AB",

      growth: "+4"

    },

  ];

  return (

    <Grid
      container
      spacing={3}
    >

      {cards.map((card) => (

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={card.title}
        >

          <Card

            sx={{

              borderRadius:4,

              cursor:"pointer",

              transition:".3s",

              height:"100%",

              "&:hover":{

                transform:"translateY(-6px)",

                boxShadow:
                "0 15px 35px rgba(0,0,0,.12)"

              }

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
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                    mt={1}
                  >
                    {card.value}
                  </Typography>

                </Box>

                <Box

                  sx={{

                    width:60,

                    height:60,

                    bgcolor:card.color,

                    borderRadius:"50%",

                    display:"flex",

                    justifyContent:"center",

                    alignItems:"center",

                    color:"#fff",

                  }}

                >

                  {card.icon}

                </Box>

              </Stack>

              <Chip

                sx={{
                  mt:3
                }}

                color="success"

                icon={<TrendingUp/>}

                label={card.growth}

              />

            </CardContent>

          </Card>

        </Grid>

      ))}

    </Grid>

  );

}