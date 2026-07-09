import React from "react";
import {
  Breadcrumbs,
  Typography,
  Link,
  Box,
} from "@mui/material";

import {
  Home as HomeIcon,
  NavigateNext,
} from "@mui/icons-material";

import {
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

const routeNames = {
  dashboard: "Dashboard",

  members: "Members",

  member: "Member",

  profile: "Profile",

  search: "Search",

  state: "State",

  district: "District",

  tehsil: "Tehsil",

  village: "Village",

  booth: "Booth",

  reports: "Reports",

  charts: "Charts",

  sms: "SMS",

  whatsapp: "WhatsApp",

  email: "Email",

  settings: "Settings",

  configuration: "Configuration",

  permissions: "Permissions",

  roles: "Roles",

  documents: "Documents",

  upload: "Upload",

  download: "Download",

  verification: "Verification",

  notifications: "Notifications",

  masters: "Masters",
};

export default function Breadcrumb() {

  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (

    <Box mb={2}>

      <Breadcrumbs
        separator={<NavigateNext fontSize="small" />}
      >

        {/* Home */}

        <Link
          component={RouterLink}
          underline="hover"
          color="inherit"
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: .5,
            fontWeight: 500,
          }}
        >
          <HomeIcon fontSize="small" />

          Home

        </Link>

        {pathnames.map((value, index) => {

          const last =
            index === pathnames.length - 1;

          const to =
            "/" +
            pathnames
              .slice(0, index + 1)
              .join("/");

          const label =
            routeNames[value] ||
            value
              .replace(/-/g, " ")
              .replace(/\b\w/g, c => c.toUpperCase());

          return last ? (

            <Typography
              key={to}
              color="text.primary"
              fontWeight={600}
            >
              {label}
            </Typography>

          ) : (

            <Link
              key={to}
              component={RouterLink}
              underline="hover"
              color="inherit"
              to={to}
            >
              {label}
            </Link>

          );

        })}

      </Breadcrumbs>

    </Box>

  );

}