import React from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  Link,
} from "@mui/material";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        px: 3,
        py: 2,
        borderTop: "1px solid #E5E7EB",
        bgcolor: "#FFFFFF",
      }}
    >
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          md: "center",
        }}
      >
        {/* Left */}

        <Box>

          <Typography
            variant="body2"
            fontWeight={600}
          >
            Digital Organizational Management System (DOMS)
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            © {year} Autasis Edutech Pvt. Ltd.
            All Rights Reserved.
          </Typography>

        </Box>

        {/* Center */}

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
        >

          <Chip
            size="small"
            color="primary"
            label="Version 1.0.0"
          />

          <Chip
            size="small"
            color="success"
            label={
              import.meta.env.DEV
                ? "Development"
                : "Production"
            }
          />

          <Chip
            size="small"
            color="secondary"
            label="Enterprise Edition"
          />

        </Stack>

        {/* Right */}

        <Stack
          direction="row"
          spacing={2}
        >

          <Link
            href="https://www.exowa.click"
            target="_blank"
            underline="hover"
          >
            Website
          </Link>

          <Link
            href="mailto:info@exowa.click"
            underline="hover"
          >
            Support
          </Link>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            Build 2026.1
          </Typography>

        </Stack>

      </Stack>
    </Box>
  );
}