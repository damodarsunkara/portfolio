import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "StudentCards",
    description: "Displaying Students Details in beautiful cards.",
    link: "https://damodarsunkara.github.io/students-cards/",
  },
  {
    title: "MovieCollection",
    description: "Movie collection data fetched from an API.",
    link: "https://damodarsunkara.github.io/movie-explorer/",
  },
  {
    title: "UserTable",
    description: "Searchable, filterable user table.",
    link: "https://damodarsunkara.github.io/usertable/",
  },
];

export default function Project() {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        mt: 8,
        mb: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 5 }}>
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((pro) => (
          <Grid >
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                background: "linear-gradient(135deg, #ffffff, #eef2f5)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.18)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#1976d2" }}>
                  {pro.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1, lineHeight: 1.6 }}
                >
                  {pro.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={pro.link}
                  target="_blank"
                  sx={{ ml: 1, mb: 1 }}
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
