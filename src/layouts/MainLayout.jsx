import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import {

    Box,

    CssBaseline,

    Toolbar,

} from "@mui/material";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";
import LoadingOverlay from "../components/common/LoadingOverlay";

const DRAWER_WIDTH = 260;

export default function MainLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [loading] = useState(false);

    const toggleSidebar = () => {

        setSidebarOpen((prev) => !prev);

    };

    const closeSidebar = () => {

        setSidebarOpen(false);

    };

    return (

        <Box sx={{ display: "flex", minHeight: "100vh" }}>

            <CssBaseline />

            {/* ======================================================
                HEADER
            ======================================================= */}

            <Header

                title="Digital Organization Management System"

                onMenuClick={toggleSidebar}

                user={{

                    name: "Administrator",

                }}

            />

            {/* ======================================================
                SIDEBAR
            ======================================================= */}

            <Sidebar

                open={sidebarOpen}

                onClose={closeSidebar}

                drawerWidth={DRAWER_WIDTH}

            />

            {/* ======================================================
                PAGE
            ======================================================= */}

            <Box

                component="main"

                sx={{

                    flexGrow: 1,

                    display: "flex",

                    flexDirection: "column",

                    minHeight: "100vh",

                    ml: {

                        md: `${DRAWER_WIDTH}px`,

                    },

                    backgroundColor: "#f5f7fb",

                }}

            >

                <Toolbar />

                <Box

                    sx={{

                        flex: 1,

                        p: 3,

                    }}

                >

                    <Breadcrumb />

                    <Outlet />

                </Box>

                <Footer />

            </Box>

            {/* ======================================================
                GLOBAL LOADER
            ======================================================= */}

            <LoadingOverlay

                open={loading}

                message="Loading..."

            />

        </Box>

    );

}