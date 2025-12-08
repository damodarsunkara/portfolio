import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#1a1a1d", // Modern dark header
        paddingY: 1,
        backdropFilter: "blur(6px)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo / Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#f5f5f7",
            fontSize: "1.3rem",
          }}
        >
          My Portfolio
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
          
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#f5f5f7",
                textTransform: "none",
                fontSize: "1rem",
                paddingX: 2,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              About
            </Button>
          </Link>

          <Link to="/projects" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                color: "#f5f5f7",
                textTransform: "none",
                fontSize: "1rem",
                paddingX: 2,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              Projects
            </Button>
          </Link>

        </Box>
        
      </Toolbar>
    </AppBar>
  );
}
