import React, { useState } from "react";
import {
  Box,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";

const DRAWER_WIDTH = 270;

export default function MainLayout() {

  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [sidebarOpen, setSidebarOpen] = useState(!mobile);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (

    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#F4F7FC",
      }}
    >

      {/* Sidebar */}

      <Sidebar
        drawerWidth={DRAWER_WIDTH}
        mobile={mobile}
        open={sidebarOpen}
        onClose={handleDrawerToggle}
      />

      {/* Main Content */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            lg: `calc(100% - ${DRAWER_WIDTH}px)`,
          },
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >

        {/* Header */}

        <Header
          mobile={mobile}
          onMenuClick={handleDrawerToggle}
        />

        {/* Prevent Header Overlay */}

        <Toolbar />

        {/* Page Content */}

        <Box
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >

          <Breadcrumb />

          <Box
            sx={{
              mt: 2,
            }}
          >
            <Outlet />
          </Box>

        </Box>

        {/* Footer */}

        <Footer />

      </Box>

    </Box>

  );
}