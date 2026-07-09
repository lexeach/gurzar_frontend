import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";

import {
  Refresh,
  Download,
  CalendarMonth,
  AccessTime,
  PictureAsPdf,
  TableView,
} from "@mui/icons-material";

export default function DashboardHeader() {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handlePDFExport = () => {
    console.log("Export PDF");
  };

  const handleExcelExport = () => {
    console.log("Export Excel");
  };

  return (

    <Box
      sx={{
        mb: 3,
        p: 3,
        borderRadius: 3,
        bgcolor: "#FFFFFF",
        boxShadow: "0 3px 15px rgba(0,0,0,.05)",
      }}
    >

      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          md: "center",
        }}
        spacing={2}
      >

        {/* Left */}

        <Box>

          <Typography
            variant="h4"
            fontWeight={700}
          >
            Super Admin Dashboard
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            Welcome to the Digital Organizational
            Management System (DOMS).
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={2}
            flexWrap="wrap"
          >

            <Chip
              icon={<CalendarMonth />}
              label={dateTime.toLocaleDateString()}
              color="primary"
            />

            <Chip
              icon={<AccessTime />}
              label={dateTime.toLocaleTimeString()}
              color="secondary"
            />

          </Stack>

        </Box>

        {/* Right */}

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
        >

          <Tooltip title="Refresh Dashboard">

            <IconButton
              color="primary"
              onClick={handleRefresh}
            >
              <Refresh />
            </IconButton>

          </Tooltip>

          <Button
            startIcon={<PictureAsPdf />}
            variant="outlined"
            onClick={handlePDFExport}
          >
            Export PDF
          </Button>

          <Button
            startIcon={<TableView />}
            variant="outlined"
            onClick={handleExcelExport}
          >
            Export Excel
          </Button>

          <Button
            startIcon={<Download />}
            variant="contained"
          >
            Download Report
          </Button>

        </Stack>

      </Stack>

    </Box>

  );

}