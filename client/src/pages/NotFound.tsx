import { Box, Container, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", color: "white" }}>
          <SearchOffIcon sx={{ fontSize: 120, mb: 2, opacity: 0.9 }} />

          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: "6rem", mb: 2 }}
          >
            404
          </Typography>

          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            Page Not Found
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={handleGoHome}
            sx={{
              bgcolor: "white",
              color: "primary.main",
              px: 4,
              py: 1.5,
              "&:hover": {
                bgcolor: "grey.100",
              },
            }}
          >
            Go Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
