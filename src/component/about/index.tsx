import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box
      sx={{
        width: "85%",
        maxWidth: 1000,
        margin: "auto",
        mt: 12,
        p: { xs: 3, sm: 5 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 4, md: 6 },

        /* Modern smooth gradient background */
        background: "linear-gradient(135deg, #f7f8fc 0%, #edf0f7 100%)",

        borderRadius: 5,
        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        "&:hover": {
          boxShadow: "0 14px 50px rgba(0,0,0,0.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Avatar */}
      <Avatar
        src=""
        alt="Damodar"
        sx={{
          width: 160,
          height: 160,
          border: "4px solid #1a1a1d",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        }}
      />

      <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: 600 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ color: "#1a1a1d", mb: 1 }}
        >
          Damodar
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#4a4b50",
            fontWeight: 500,
            mb: 2,
            letterSpacing: "0.5px",
          }}
        >
          Web Developer • React • TypeScript • Material UI
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: "#3c3d42",
            fontSize: "1.05rem",
          }}
        >
          I build modern, responsive, and elegant web applications with a strong
          focus on smooth UI/UX, clean code, and scalable architecture.
          Specialized in React, TypeScript, and MUI with a passion for creating
          high-performance front-end experiences.
        </Typography>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 4,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                background: "#1a1a1d",
                "&:hover": { background: "#2a2a2e" },
                paddingX: 3,
                paddingY: 1,
              }}
            >
              Contact
            </Button>
          </Link>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#1a1a1d",
              color: "#1a1a1d",
              paddingX: 3,
              paddingY: 1,
              "&:hover": {
                background: "rgba(0,0,0,0.07)",
                borderColor: "#1a1a1d",
              },
            }}
          >
            My Portfolio
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
