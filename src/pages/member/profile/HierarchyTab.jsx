// src/pages/member/profile/HierarchyTab.jsx

import React from "react";

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import {
  AccountTree,
  Groups,
  LocationCity,
  Apartment,
} from "@mui/icons-material";

const hierarchyData = [
  {
    label: "State",
    value: "Haryana",
    icon: <LocationCity color="primary" />,
  },
  {
    label: "District",
    value: "Sonipat",
    icon: <Apartment color="primary" />,
  },
  {
    label: "Committee",
    value: "Gurzar Reservation Committee",
    icon: <Groups color="primary" />,
  },
  {
    label: "Position",
    value: "Member",
    icon: <AccountTree color="primary" />,
  },
];

const HierarchyTab = ({ member = {} }) => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          mb={2}
        >
          <AccountTree color="primary" />

          <Typography variant="h6">
            Organization Hierarchy
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={2}>
          {hierarchyData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <Card variant="outlined">
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    mb={1}
                  >
                    {item.icon}

                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                    >
                      {item.label}
                    </Typography>
                  </Box>

                  <Chip
                    label={
                      member[
                        item.label.toLowerCase()
                      ] || item.value
                    }
                    color="primary"
                    variant="outlined"
                    sx={{ mt: 1 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={4}>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            This section displays the member's
            organizational hierarchy, including
            state, district, committee, and role.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HierarchyTab;