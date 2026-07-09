import React, { useState } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const defaultData = [
  {
    month: "Jan",
    states: 22,
    districts: 580,
    villages: 18200,
    members: 420000,
  },
  {
    month: "Feb",
    states: 23,
    districts: 602,
    villages: 18800,
    members: 465000,
  },
  {
    month: "Mar",
    states: 24,
    districts: 625,
    villages: 19450,
    members: 520000,
  },
  {
    month: "Apr",
    states: 25,
    districts: 648,
    villages: 20500,
    members: 610000,
  },
  {
    month: "May",
    states: 26,
    districts: 670,
    villages: 21600,
    members: 720000,
  },
  {
    month: "Jun",
    states: 27,
    districts: 701,
    villages: 22900,
    members: 845000,
  },
  {
    month: "Jul",
    states: 28,
    districts: 742,
    villages: 24840,
    members: 1025486,
  },
];

export default function HierarchyGrowthChart({

  data = defaultData,

}) {

  const [year, setYear] = useState("2026");

  return (

    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >

      <CardHeader

        title="Hierarchy Growth Analytics"

        subheader="Monthly Organization Expansion"

        action={

          <FormControl
            size="small"
          >

            <Select

              value={year}

              onChange={(e)=>
                setYear(e.target.value)
              }

            >

              <MenuItem value="2026">
                2026
              </MenuItem>

              <MenuItem value="2025">
                2025
              </MenuItem>

              <MenuItem value="2024">
                2024
              </MenuItem>

            </Select>

          </FormControl>

        }

      />

      <CardContent>

        <Box
          sx={{
            height:420,
          }}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={data}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="month"
              />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line

                type="monotone"

                dataKey="states"

                stroke="#1976D2"

                strokeWidth={3}

                activeDot={{
                  r:6,
                }}

              />

              <Line

                type="monotone"

                dataKey="districts"

                stroke="#2E7D32"

                strokeWidth={3}

              />

              <Line

                type="monotone"

                dataKey="villages"

                stroke="#ED6C02"

                strokeWidth={3}

              />

              <Line

                type="monotone"

                dataKey="members"

                stroke="#8E24AA"

                strokeWidth={3}

              />

            </LineChart>

          </ResponsiveContainer>

        </Box>

      </CardContent>

    </Card>

  );

}