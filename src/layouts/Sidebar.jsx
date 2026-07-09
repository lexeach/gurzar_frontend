import React, { useState } from "react";
import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import {
  Dashboard,
  People,
  AccountTree,
  Assessment,
  Description,
  Settings,
  ExpandLess,
  ExpandMore,
  ChevronRight,
  Sms,
  Person,
  QrCode,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const menu = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/",
  },
  {
    title: "Member Management",
    icon: <People />,
    children: [
      {
        title: "Members",
        path: "/members",
      },
      {
        title: "Registration",
        path: "/member/new",
      },
      {
        title: "Search",
        path: "/member/search",
      },
      {
        title: "QR Card",
        path: "/member/qr-card",
      },
    ],
  },
  {
    title: "Hierarchy",
    icon: <AccountTree />,
    children: [
      {
        title: "State",
        path: "/state",
      },
      {
        title: "District",
        path: "/district",
      },
      {
        title: "Tehsil",
        path: "/tehsil",
      },
      {
        title: "Village",
        path: "/village",
      },
      {
        title: "Booth",
        path: "/booth",
      },
    ],
  },
  {
    title: "Communication",
    icon: <Sms />,
    children: [
      {
        title: "SMS",
        path: "/sms",
      },
      {
        title: "WhatsApp",
        path: "/whatsapp",
      },
      {
        title: "Email",
        path: "/email",
      },
      {
        title: "Push Notification",
        path: "/push-notification",
      },
    ],
  },
  {
    title: "Reports",
    icon: <Assessment />,
    path: "/reports",
  },
  {
    title: "Documents",
    icon: <Description />,
    path: "/documents/upload",
  },
  {
    title: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
  {
    title: "Profile",
    icon: <Person />,
    path: "/profile",
  },
];

export default function Sidebar({
  drawerWidth,
  mobile,
  open,
  onClose,
}) {
  const location = useLocation();

  const { user } = useSelector((state) => state.auth);

  const [expanded, setExpanded] = useState({});

  const toggleMenu = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const drawerContent = (
    <>
      <Toolbar
        sx={{
          justifyContent: "center",
          py: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#ffffff",
            color: "#0B5ED7",
            width: 55,
            height: 55,
            mr: 2,
          }}
        >
          D
        </Avatar>

        <Box>
          <Typography fontWeight={700}>
            DOMS
          </Typography>

          <Typography
            variant="caption"
            color="rgba(255,255,255,.7)"
          >
            Enterprise Edition
          </Typography>
        </Box>
      </Toolbar>

      <Divider />

      <Box
        sx={{
          p: 2,
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            width: 65,
            height: 65,
            margin: "auto",
          }}
        />

        <Typography
          mt={1}
          fontWeight={600}
        >
          {user?.name || "Administrator"}
        </Typography>

        <Typography
          variant="caption"
          color="rgba(255,255,255,.7)"
        >
          {user?.role || "SUPER ADMIN"}
        </Typography>
      </Box>

      <Divider />

      <List>

        {menu.map((item) => {

          if (item.children) {

            return (
              <React.Fragment key={item.title}>

                <ListItemButton
                  onClick={() =>
                    toggleMenu(item.title)
                  }
                >
                  <ListItemIcon
                    sx={{ color: "#fff" }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.title}
                  />

                  {expanded[item.title]
                    ? <ExpandLess />
                    : <ExpandMore />}
                </ListItemButton>

                <Collapse
                  in={expanded[item.title]}
                >
                  <List
                    component="div"
                    disablePadding
                  >
                    {item.children.map((sub) => (
                      <ListItemButton
                        key={sub.title}
                        component={Link}
                        to={sub.path}
                        selected={
                          location.pathname ===
                          sub.path
                        }
                        sx={{ pl: 6 }}
                      >
                        <ListItemIcon
                          sx={{
                            color: "#fff",
                            minWidth: 30,
                          }}
                        >
                          <ChevronRight />
                        </ListItemIcon>

                        <ListItemText
                          primary={sub.title}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>

              </React.Fragment>
            );
          }

          return (
            <ListItemButton
              key={item.title}
              component={Link}
              to={item.path}
              selected={
                location.pathname === item.path
              }
            >
              <ListItemIcon
                sx={{ color: "#fff" }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.title}
              />
            </ListItemButton>
          );

        })}

      </List>
    </>
  );

  return (
    <Drawer
      variant={
        mobile ? "temporary" : "permanent"
      }
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: "#0B5ED7",
          color: "#fff",
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}