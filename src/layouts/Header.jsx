import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  Badge,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Search,
  Notifications,
  Fullscreen,
  FullscreenExit,
  Settings,
  Logout,
  Person,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Header({
  mobile,
  onMenuClick,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.auth
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const [darkMode, setDarkMode] =
    useState(false);

  const [fullScreen, setFullScreen] =
    useState(false);

  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      color="inherit"
      sx={{
        zIndex: (theme) =>
          theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>

        {/* Mobile Menu */}

        {mobile && (
          <IconButton
            onClick={onMenuClick}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Title */}

        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ mr: 4 }}
        >
          DOMS
        </Typography>

        {/* Search */}

        <Box
          sx={{
            flexGrow: 1,
            maxWidth: 450,
            display: "flex",
            alignItems: "center",
            bgcolor: "#F5F7FA",
            borderRadius: 2,
            px: 2,
          }}
        >
          <Search
            color="action"
            sx={{ mr: 1 }}
          />

          <InputBase
            fullWidth
            placeholder="Search members..."
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Dark Mode */}

        <Tooltip title="Theme">
          <IconButton
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode ? (
              <LightMode />
            ) : (
              <DarkMode />
            )}
          </IconButton>
        </Tooltip>

        {/* Full Screen */}

        <Tooltip title="Fullscreen">
          <IconButton
            onClick={toggleFullscreen}
          >
            {fullScreen ? (
              <FullscreenExit />
            ) : (
              <Fullscreen />
            )}
          </IconButton>
        </Tooltip>

        {/* Notifications */}

        <Tooltip title="Notifications">
          <IconButton>

            <Badge
              badgeContent={5}
              color="error"
            >
              <Notifications />
            </Badge>

          </IconButton>
        </Tooltip>

        {/* Settings */}

        <Tooltip title="Settings">
          <IconButton
            onClick={() =>
              navigate("/configuration")
            }
          >
            <Settings />
          </IconButton>
        </Tooltip>

        {/* Profile */}

        <IconButton
          onClick={handleProfileClick}
        >
          <Avatar
            src={user?.photo}
            alt={user?.name}
          />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >

          <Box
            sx={{
              px: 2,
              py: 1,
            }}
          >
            <Typography
              fontWeight={700}
            >
              {user?.name ||
                "Administrator"}
            </Typography>

            <Typography
              variant="caption"
            >
              {user?.email ||
                "admin@doms.com"}
            </Typography>
          </Box>

          <Divider />

          <MenuItem
            onClick={() => {
              navigate("/profile");
              handleClose();
            }}
          >
            <Person
              sx={{ mr: 1 }}
            />
            My Profile
          </MenuItem>

          <MenuItem
            onClick={() => {
              navigate("/configuration");
              handleClose();
            }}
          >
            <Settings
              sx={{ mr: 1 }}
            />
            Settings
          </MenuItem>

          <Divider />

          <MenuItem
            onClick={handleLogout}
          >
            <Logout
              sx={{ mr: 1 }}
            />
            Logout
          </MenuItem>

        </Menu>

      </Toolbar>
    </AppBar>
  );
}