import React from "react";
import { Outlet } from "react-router-dom";

import {
    Box,
    Container,
    Toolbar,
} from "@mui/material";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";
import LoadingOverlay from "../components/common/LoadingOverlay";

const DRAWER_WIDTH = 260;

export default function DashboardLayout() {

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const [loading] = React.useState(false);

    const handleDrawerOpen = () => {

        setSidebarOpen(true);

    };

    const handleDrawerClose = () => {

        setSidebarOpen(false);

    };

    return (

        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                bgcolor: "background.default",
            }}
        >

            {/* Header */}

            <Header

                title="Digital Organization Management System"

                onMenuClick={handleDrawerOpen}

            />

            {/* Sidebar */}

            <Sidebar

                open={sidebarOpen}

                onClose={handleDrawerClose}

                drawerWidth={DRAWER_WIDTH}

            />

            {/* Main */}

            <Box

                component="main"

                sx={{

                    flexGrow: 1,

                    display: "flex",

                    flexDirection: "column",

                    ml: {

                        md: `${DRAWER_WIDTH}px`,

                    },

                }}

            >

                <Toolbar />

                <Container

                    maxWidth="xl"

                    sx={{

                        py: 3,

                        flexGrow: 1,

                    }}

                >

                    <Breadcrumb />

                    <Outlet />

                </Container>

                <Footer />

            </Box>

            <LoadingOverlay

                open={loading}

            />

        </Box>

    );

}