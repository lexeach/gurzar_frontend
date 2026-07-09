import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette: {

    mode: "light",

    primary: {
      main: "#0B5ED7",
      light: "#4D8DFF",
      dark: "#084298",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#FF6B00",
      light: "#FF9A4D",
      dark: "#D35400",
      contrastText: "#FFFFFF",
    },

    success: {
      main: "#2E7D32",
    },

    warning: {
      main: "#ED6C02",
    },

    error: {
      main: "#D32F2F",
    },

    info: {
      main: "#0288D1",
    },

    background: {
      default: "#F4F7FC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1E293B",
      secondary: "#64748B",
    },

    divider: "#E2E8F0",
  },

  typography: {

    fontFamily: [
      "Inter",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontSize: "2.3rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "1.7rem",
      fontWeight: 700,
    },

    h4: {
      fontSize: "1.45rem",
      fontWeight: 600,
    },

    h5: {
      fontSize: "1.2rem",
      fontWeight: 600,
    },

    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "15px",
      lineHeight: 1.8,
    },

    body2: {
      fontSize: "14px",
      lineHeight: 1.7,
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {

    MuiButton: {

      styleOverrides: {

        root: {
          borderRadius: 10,
          padding: "10px 22px",
          boxShadow: "none",
          fontWeight: 600,
        },

        containedPrimary: {
          "&:hover": {
            boxShadow: "0 8px 18px rgba(11,94,215,.25)",
          },
        },
      },
    },

    MuiCard: {

      styleOverrides: {

        root: {
          borderRadius: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,.05)",
          border: "1px solid #E5E7EB",
        },
      },
    },

    MuiPaper: {

      styleOverrides: {

        root: {
          borderRadius: 14,
        },
      },
    },

    MuiAppBar: {

      styleOverrides: {

        root: {
          backgroundColor: "#FFFFFF",
          color: "#1E293B",
          boxShadow: "0 2px 8px rgba(0,0,0,.05)",
        },
      },
    },

    MuiDrawer: {

      styleOverrides: {

        paper: {
          background: "#0B5ED7",
          color: "#FFFFFF",
          borderRight: "none",
        },
      },
    },

    MuiTextField: {

      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },

    MuiOutlinedInput: {

      styleOverrides: {

        root: {
          borderRadius: 10,
        },
      },
    },

    MuiTableHead: {

      styleOverrides: {

        root: {
          backgroundColor: "#F8FAFC",
        },
      },
    },

    MuiChip: {

      styleOverrides: {

        root: {
          borderRadius: 8,
        },
      },
    },

    MuiDialog: {

      styleOverrides: {

        paper: {
          borderRadius: 16,
        },
      },
    },

    MuiTooltip: {

      defaultProps: {
        arrow: true,
      },
    },

    MuiAvatar: {

      styleOverrides: {

        root: {
          backgroundColor: "#0B5ED7",
        },
      },
    },

    MuiCssBaseline: {

      styleOverrides: {

        body: {
          backgroundColor: "#F4F7FC",
          margin: 0,
          padding: 0,
        },

        "*": {
          boxSizing: "border-box",
        },

        a: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;