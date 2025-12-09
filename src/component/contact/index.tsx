import { Box, TextField, Button, Typography, Stack, Card } from "@mui/material";


export default function Contact() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd, #f8f9fa)",
        p: 3,
      }}
    >
      <Card
        sx={{
          width: "80%",
          maxWidth: 600,
          p: 4,
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
          Contact Me
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 3 }}
        >
          I would love to connect! Fill out the form or message me using the
          details below.
        </Typography>

        {/* Your Info */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight="bold">
          j My Details
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Name:</strong> Damodar<br />
            <strong>Email:</strong> sunkaradamodar1@gmail.com<br />
           
            <strong>Location:</strong> India
          </Typography>
        </Box>

        {/* Contact Form */}
        <Stack spacing={2}>
          <TextField
            label="Your Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Your Email"
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Message"
            fullWidth
            minRows={4}
            multiline
            variant="outlined"
          />

          <Button variant="contained" color="primary" size="large">
            Send Message
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
