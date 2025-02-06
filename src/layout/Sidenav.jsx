import React, { useEffect, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";
import logoDark from "../assets/Logo-Dark.png";
import logoWhite from "../assets/logoWhite.png";

const drawerWidth = 240;

export default function Sidenav({ menuItems, children }) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") !== "light"
  );
  const [open, setOpen] = useState(window.innerWidth >= 600);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
      setOpen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <ThemeProvider darkMode={darkMode}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />

        <Header
          open={open}
          setOpen={setOpen}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          isMobile={isMobile}
          handleLogout={handleLogout}
          logo={darkMode ? logoDark : logoWhite}
        />

        <Sidebar open={open} menuItems={menuItems} />

        {/* Main Content */}
        <Box
          sx={{
            marginTop: "50px",
            padding: 3,
            // marginLeft: "50px",
            // marginRight: "50px",
            width: `calc(100% - ${open ? drawerWidth : 60}px)`,
            transition: "width 0.3s",
            height: "calc(100vh - 50px)",
            overflowY: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
