import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Stack,
} from "@mui/material";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Rajasthan", value: 32 },
  { name: "Haryana", value: 18 },
  { name: "Uttar Pradesh", value: 15 },
  { name: "Delhi", value: 12 },
  { name: "Madhya Pradesh", value: 9 },
  { name: "Gujarat", value: 7 },
  { name: "Punjab", value: 4 },
  { name: "Others", value: 3 },
];

const COLORS = [
  "#1976D2",
  "#2E7D32",
  "#ED6C02",
  "#9C27B0",
  "#D81B60",
  "#00897B",
  "#6D4C41",
  "#607D8B",
];

export default function StateDistributionChart() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardHeader
        title="State-wise Distribution"
        subheader="Active Member Percentage"
      />

      <CardContent>

        <Box
          sx={{
            height: 280,
          }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={3}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </Box>

        <Stack
          spacing={1}
          mt={2}
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            • Total States Covered : <b>28</b>
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            • Active Districts : <b>742</b>
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            • Total Members : <b>10,25,486</b>
          </Typography>
        </Stack>

      </CardContent>
    </Card>
  );
}