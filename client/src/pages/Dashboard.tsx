import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Divider,
  AppBar,
  Toolbar,
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Person as PersonIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import { useAuth, type User } from "../context/AuthContext";

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState<User>({ email: "", name: "" });
  const [tempInfo, setTempInfo] = useState({ ...user });
  const { fetchUser, logout } = useAuth();

  const handleEdit = () => {
    setTempInfo({ ...user });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser({ ...tempInfo });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempInfo({ ...user });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetchUser();
        console.log(res);

        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, [fetchUser]);

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "white", color: "primary.main" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "primary.main" }}
          >
            Easygenerator
          </Typography>
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              User Dashboard
            </Typography>
            {!isEditing && (
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit
              </Button>
            )}
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid size={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <PersonIcon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  {isEditing ? (
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      value={tempInfo.name}
                      onChange={(e) =>
                        setTempInfo({ ...tempInfo, name: e.target.value })
                      }
                    />
                  ) : (
                    <>
                      <Typography variant="caption" color="text.secondary">
                        Full Name
                      </Typography>
                      <Typography variant="h6">{user.name}</Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>

            <Grid size={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "success.main" }}>
                  <EmailIcon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  {isEditing ? (
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      type="email"
                      value={tempInfo.email}
                      onChange={(e) =>
                        setTempInfo({ ...tempInfo, email: e.target.value })
                      }
                    />
                  ) : (
                    <>
                      <Typography variant="caption" color="text.secondary">
                        Email Address
                      </Typography>
                      <Typography variant="h6">{user.email}</Typography>
                    </>
                  )}
                </Box>
              </Box>
            </Grid>

            {isEditing && (
              <Grid size={12}>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            )}
          </Grid>

          <Divider sx={{ mt: 4, mb: 2 }} />

          <Typography variant="caption" color="text.secondary">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
