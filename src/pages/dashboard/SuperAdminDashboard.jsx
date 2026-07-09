import React from "react";
import {
  Box,
  Grid,
} from "@mui/material";

import DashboardHeader from "./components/DashboardHeader";
import WelcomeCard from "./components/WelcomeCard";
import StatisticsCards from "./components/StatisticsCards";
import MemberGrowthChart from "./components/MemberGrowthChart";
import StateDistributionChart from "./components/StateDistributionChart";
import RecentMembers from "./components/RecentMembers";
import RecentActivities from "./components/RecentActivities";
import QuickActions from "./components/QuickActions";
import Notifications from "./components/Notifications";

import "./dashboard.css";

export default function SuperAdminDashboard() {

    return (

        <Box>

            {/* Dashboard Header */}

            <DashboardHeader />

            {/* Welcome */}

            <WelcomeCard />

            <Grid
                container
                spacing={3}
            >

                {/* Statistics */}

                <Grid
                    size={{
                        xs:12
                    }}
                >

                    <StatisticsCards />

                </Grid>

                {/* Charts */}

                <Grid
                    size={{
                        xs:12,
                        lg:8
                    }}
                >

                    <MemberGrowthChart />

                </Grid>

                <Grid
                    size={{
                        xs:12,
                        lg:4
                    }}
                >

                    <StateDistributionChart />

                </Grid>

                {/* Recent Members */}

                <Grid
                    size={{
                        xs:12,
                        lg:8
                    }}
                >

                    <RecentMembers />

                </Grid>

                {/* Notification */}

                <Grid
                    size={{
                        xs:12,
                        lg:4
                    }}
                >

                    <Notifications />

                </Grid>

                {/* Activities */}

                <Grid
                    size={{
                        xs:12,
                        lg:8
                    }}
                >

                    <RecentActivities />

                </Grid>

                {/* Quick Actions */}

                <Grid
                    size={{
                        xs:12,
                        lg:4
                    }}
                >

                    <QuickActions />

                </Grid>

            </Grid>

        </Box>

    );

}