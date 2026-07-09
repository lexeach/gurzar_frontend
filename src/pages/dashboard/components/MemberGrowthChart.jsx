import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", members: 1200 },
  { month: "Feb", members: 1850 },
  { month: "Mar", members: 2400 },
  { month: "Apr", members: 3200 },
  { month: "May", members: 4200 },
  { month: "Jun", members: 5100 },
  { month: "Jul", members: 6500 },
  { month: "Aug", members: 7600 },
  { month: "Sep", members: 8450 },
  { month: "Oct", members: 9600 },
  { month: "Nov", members: 10850 },
  { month: "Dec", members: 12200 },
];

export default function MemberGrowthChart() {

  const [year, setYear] = useState("2026");

  return (

    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >

      <CardHeader

        title="Member Growth Analytics"

        subheader="Monthly Registration Trend"

        action={

          <FormControl size="small">

            <Select
              value={year}
              onChange={(e) =>
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
            height: 380,
          }}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={data}
            >

              <defs>

                <linearGradient
                  id="memberGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#1976D2"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="100%"
                    stopColor="#1976D2"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="month"
              />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="members"
                stroke="#1976D2"
                strokeWidth={3}
                fill="url(#memberGradient)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </Box>

      </CardContent>

    </Card>

  );

}