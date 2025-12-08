import { Box, Typography, IconButton } from "@mui/material";
import {  LinkedIn, GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        mt: 6,
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #ddd",
      
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
     

       

        <IconButton
          color="primary"
          component="a"
          href="https://linkedin.com"
          target="_blank"
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          color="primary"
          component="a"
          href="https://github.com"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Box>

    
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Damodar. All Rights Reserved.
      </Typography>
    </Box>
  );
}
