import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import logoDark from "../assets/Logo-Dark.png";
import logoWhite from "../assets/logoWhite.png";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: open ? drawerWidth : 0,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    width: open ? drawerWidth : 0,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
  },
}));

export default function Sidenav({ menuItems, children }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  const [open, setOpen] = useState(window.innerWidth >= 600);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  // Handle window resize
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      if (window.innerWidth < 600) {
        setOpen(false); // Auto-close sidebar on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f4f4f4",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
          color: theme.palette.text.primary,
        }}
      >
        <CssBaseline />

        {/* Header */}
        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Link to="/dashboard">
              <img
                src={darkMode ? logoDark : logoWhite}
                alt="logo"
                width={60}
                style={{ transition: "0.3s ease-in-out" }}
              />
            </Link>

            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={open}
          onClose={() => setOpen(false)}
        >
          <DrawerHeader>
            <Typography variant="h6" noWrap>
              Shashank
            </Typography>
          </DrawerHeader>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem disablePadding sx={{ display: "block" }} key={index}>
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                  }}
                >
                  <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
                    <ListItemIcon
                      sx={{ color: theme.palette.text.primary, fontSize: 25 }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>

        {/* Main Content */}
        <Box
          sx={{
            marginTop: "64px",
            padding: 3,
            width: isMobile
              ? "100%"
              : open
                ? `calc(100% - ${drawerWidth}px)`
                : "100%",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
