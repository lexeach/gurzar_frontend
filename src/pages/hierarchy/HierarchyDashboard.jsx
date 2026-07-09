import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import {
  Public,
  LocationCity,
  AccountTree,
  HolidayVillage,
  HowToVote,
  Groups,
  Person,
  BusinessCenter,
  Add,
  Assessment,
  FileDownload,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";

import StatisticsCards from "./components/StatisticsCards";
import HierarchyGrowthChart from "./components/HierarchyGrowthChart";
import OrganizationTree from "./components/OrganizationTree";
import RecentHierarchy from "./components/RecentHierarchy";
import QuickActions from "./components/QuickActions";

import {
  fetchHierarchyDashboard,
} from "../../redux/slices/hierarchySlice";

export default function HierarchyDashboard() {

  const dispatch = useDispatch();

  const {
    dashboard,
    loading,
  } = useSelector(
    state => state.hierarchy
  );

  useEffect(() => {

    dispatch(
      fetchHierarchyDashboard()
    );

  }, []);

  return (

    <Box>

      {/* ======================================================
         Page Header
      ======================================================= */}

      <Stack

        direction={{
          xs: "column",
          md: "row",
        }}

        justifyContent="space-between"

        alignItems="center"

        mb={3}

      >

        <Box>

          <Typography
            variant="h4"
            fontWeight={700}
          >
            Organization Hierarchy
          </Typography>

          <Typography
            color="text.secondary"
          >
            Manage States, Districts, Tehsils, Villages & Booths
          </Typography>

        </Box>

        <Stack
          direction="row"
          spacing={2}
          mt={{
            xs:2,
            md:0
          }}
        >

          <Button

            variant="contained"

            startIcon={<Add/>}

          >

            Add State

          </Button>

          <Button

            variant="outlined"

            startIcon={<Assessment/>}

          >

            Analytics

          </Button>

          <Button

            variant="outlined"

            startIcon={<FileDownload/>}

          >

            Export

          </Button>

        </Stack>

      </Stack>

      {/* ======================================================
            Statistics
      ======================================================= */}

      <StatisticsCards
        statistics={dashboard}
      />

      {/* ======================================================
            Charts + Tree
      ======================================================= */}

      <Grid
        container
        spacing={3}
        mt={1}
      >

        <Grid
          item
          xs={12}
          lg={8}
        >

          <HierarchyGrowthChart/>

        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
        >

          <QuickActions/>

        </Grid>

        <Grid
          item
          xs={12}
          lg={7}
        >

          <OrganizationTree/>

        </Grid>

        <Grid
          item
          xs={12}
          lg={5}
        >

          <RecentHierarchy/>

        </Grid>

      </Grid>

    </Box>

  );

}