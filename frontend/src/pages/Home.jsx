import { Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button, Stack , Snackbar, Alert} from "@mui/material";
import { MdDelete } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";



const Home = () => {
  const { products, fetchProducts, deleteProduct } = useProductStore();
  const { isDarkMode } = useTheme();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleDelete = async (id) => {
    const result = await deleteProduct(id);
    if (result.success) {
      setSnackbar({
        open: true,
        message: result.message,
        severity: "success"
      });
    } else {
      setSnackbar({
        open: true,
        message: result.message,
        severity: "error"
      });
    }
  }

  const bgGradient = isDarkMode
    ? "linear-gradient(180deg, #181c24 0%, #232a36 100%)"
    : "linear-gradient(180deg, #fffbe6 0%, #ffe066 100%)";

  const cardBg = isDarkMode ? "#232a36" : "#fffde7";
  const cardText = isDarkMode ? "#fff" : "#ff9800";
  const cardShadow = isDarkMode
    ? "0 4px 24px 0 rgba(31, 38, 135, 0.18)"
    : "0 4px 24px 0 rgba(255, 152, 0, 0.15)";

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        background: bgGradient,
        py: 6,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        color={isDarkMode ? "#40cfff" : "#ff9800"}
        display="flex"
        alignItems="center"
        mb={3}
        sx={{ letterSpacing: 1 }}
      >
        Current Products&nbsp;
        <FaRocket style={{ color: isDarkMode ? "#40cfff" : "#ff9800", fontSize: 32 }} />
      </Typography>
      {(!products || products.length === 0) ? (
        <Typography
          variant="h6"
          color={isDarkMode ? "#b0b8c1" : "#ff9800"}
          display="flex"
          alignItems="center"
          gap={1}
        >
          No products found <span role="img" aria-label="sad">😢</span>
          <Link
            to="/create"
            style={{
              color: isDarkMode ? "#40cfff" : "#ff9800",
              fontWeight: 600,
              marginLeft: 8,
              textDecoration: "none",
            }}
          >
            Create a product
          </Link>
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2, width: "100%", maxWidth: 1200 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={product._id} display="flex" justifyContent="center">
              <Card
                sx={{
                  background: cardBg,
                  color: cardText,
                  borderRadius: 5,
                  boxShadow: cardShadow,
                  transition: "background 0.3s, box-shadow 0.3s",
                  height: 260,
                  minWidth: 200,
                  maxWidth: 240,
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 1,
                  gap: 1,
                }}
              >
                <CardMedia
                  component="img"
                  height="110"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: "cover",
                    borderRadius: 3,
                    background: "#fffbe6",
                    width: "90%",
                    maxHeight: 110,
                    margin: "0 auto",
                    boxShadow: isDarkMode
                      ? "0 2px 8px 0 rgba(31, 38, 135, 0.10)"
                      : "0 2px 8px 0 rgba(255,152,0,0.10)",
                  }}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/180x100?text=No+Image";
                  }}
                />
                <CardContent sx={{ p: 1, width: "100%", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <Typography variant="h6" fontWeight={700} gutterBottom fontSize={17} align="center">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" fontWeight={600} fontSize={15} align="center">
                    ₹{product.price}
                  </Typography>
                </CardContent>
                <Stack direction="row" spacing={1} justifyContent="center" sx={{ width: "100%", mb: 1 }}>
                  <Button variant="outlined" color="primary" size="small" sx={{ minWidth: 0, px: 1.5, borderRadius: 2 }}>
                    <FaPencil size={16} />
                  </Button>
                  <Button variant="outlined" color="error" size="small" sx={{ minWidth: 0, px: 1.5, borderRadius: 2 }} onClick={() => handleDelete(product._id)}>
                    <MdDelete size={18} />
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Snackbar
        open={snackbar.open}
   
        severity={snackbar.severity}
         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        >
         <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            color: isDarkMode ? '#fff' : '#222',
            '& .MuiAlert-icon': {
              color: snackbar.severity === 'success' ? '#4caf50' : '#f44336'
            }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;