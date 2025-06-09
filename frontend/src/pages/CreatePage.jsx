import { useTheme } from "../context/ThemeContext";
import { Button, TextField, Box, Typography, Container, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";
import Toast from "../components/ui/toaster";


const CreatePage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: ""
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const { createProduct } = useProductStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createProduct(formData);
    setSnackbar({
      open: true,
      message: res.message,
      severity: res.success ? "success" : "error"
    });
    
    if (res.success) {
      // Clear form after successful submission
      setFormData({ name: "", price: "", image: "" });
      // Navigate to home page after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-orange-100 via-white to-orange-200'}`} style={{ position: 'relative' }}>
      {/* Glassmorphic Card */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255,255,255,0.7)',
          borderRadius: '32px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          border: isDarkMode ? '1px solid rgba(255,255,255,0.18)' : '1px solid rgba(255,140,0,0.15)',
          p: { xs: 3, sm: 6 },
          width: { xs: '95%', sm: 420 },
          maxWidth: 480,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: isDarkMode ? '#fff' : '#ff9800', letterSpacing: 1 }}>
          Create Product
        </Typography>
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          // onChange = {(e) => setFormData({...formData, name: e.target.value})}
          variant="outlined"
          required
          sx={{
            mb: 2,
            borderRadius: 3,
            background: isDarkMode ? 'rgba(30,41,59,0.5)' : 'rgba(255,255,255,0.6)',
            input: { color: isDarkMode ? '#fff' : '#222' },
            '& fieldset': { borderRadius: 3, borderColor: isDarkMode ? '#ff9800' : '#ff9800' },
            '& label': { color: isDarkMode ? '#ff9800' : '#ff9800' },
          }}
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          variant="outlined"
          required
          sx={{
            mb: 2,
            borderRadius: 3,
            background: isDarkMode ? 'rgba(30,41,59,0.5)' : 'rgba(255,255,255,0.6)',
            input: { color: isDarkMode ? '#fff' : '#222' },
            '& fieldset': { borderRadius: 3, borderColor: isDarkMode ? '#ff9800' : '#ff9800' },
            '& label': { color: isDarkMode ? '#ff9800' : '#ff9800' },
          }}
        />
        <TextField
          fullWidth
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          variant="outlined"
          required
          sx={{
            mb: 4,
            borderRadius: 3,
            background: isDarkMode ? 'rgba(30,41,59,0.5)' : 'rgba(255,255,255,0.6)',
            input: { color: isDarkMode ? '#fff' : '#222' },
            '& fieldset': { borderRadius: 3, borderColor: isDarkMode ? '#ff9800' : '#ff9800' },
            '& label': { color: isDarkMode ? '#ff9800' : '#ff9800' },
          }}
        />
        <Box sx={{ display: 'flex', gap: 2, width: '100%', mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              borderRadius: 99,
              background: 'linear-gradient(90deg, #ff9800 0%, #ffc107 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              boxShadow: '0 2px 8px 0 rgba(255,152,0,0.15)',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(90deg, #ffc107 0%, #ff9800 100%)',
              },
            }}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate("/")}
            sx={{
              borderRadius: 99,
              borderColor: '#ff9800',
              color: isDarkMode ? '#fff' : '#ff9800',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'none',
              '&:hover': {
                background: isDarkMode ? 'rgba(255,152,0,0.08)' : 'rgba(255,152,0,0.08)',
                borderColor: '#ff9800',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>

     <Toast
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default CreatePage;
