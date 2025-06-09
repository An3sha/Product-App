import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useProductStore } from "../store/product";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Toast from "../components/ui/toaster";

const UpdateProductModal = ({ open, onClose, product }) => {
  const { updateProduct } = useProductStore();
    const { isDarkMode } = useTheme();
     const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        image: product.image || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(product._id, formData);
    setSnackbar({
      open: true,
      message: "Product updated successfully",
      severity: "success"
    });
    setTimeout(() => {
      onClose();
    }, 1200);
  };
  

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: isDarkMode ? "#232a36" : "#fffde7",
            color: isDarkMode ? "#fff" : "#ff9800",
            boxShadow: isDarkMode
              ? "0 8px 32px 0 rgba(31, 38, 135, 0.18)"
              : "0 8px 32px 0 rgba(255, 152, 0, 0.10)",
            borderRadius: 4,
            minWidth: 340,
            p: { xs: 3, sm: 4 },
            outline: "none",
          }}
        >
          <Typography
            variant="h6"
            mb={2}
            sx={{
              fontWeight: 700,
              color: isDarkMode ? "#40cfff" : "#ff9800",
              letterSpacing: 1,
              textAlign: "center",
            }}
          >
            Update Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  background: isDarkMode
                    ? "rgba(30,41,59,0.5)"
                    : "rgba(255,255,255,0.6)",
                  input: { color: isDarkMode ? "#fff" : "#222" },
                  "& fieldset": {
                    borderRadius: 3,
                    borderColor: isDarkMode ? "#40cfff" : "#ff9800",
                  },
                  "& label": { color: isDarkMode ? "#40cfff" : "#ff9800" },
                }}
              />
              <TextField
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  background: isDarkMode
                    ? "rgba(30,41,59,0.5)"
                    : "rgba(255,255,255,0.6)",
                  input: { color: isDarkMode ? "#fff" : "#222" },
                  "& fieldset": {
                    borderRadius: 3,
                    borderColor: isDarkMode ? "#40cfff" : "#ff9800",
                  },
                  "& label": { color: isDarkMode ? "#40cfff" : "#ff9800" },
                }}
              />
              <TextField
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                sx={{
                  background: isDarkMode
                    ? "rgba(30,41,59,0.5)"
                    : "rgba(255,255,255,0.6)",
                  input: { color: isDarkMode ? "#fff" : "#222" },
                  "& fieldset": {
                    borderRadius: 3,
                    borderColor: isDarkMode ? "#40cfff" : "#ff9800",
                  },
                  "& label": { color: isDarkMode ? "#40cfff" : "#ff9800" },
                }}
              />
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  onClick={onClose}
                  variant="outlined"
                  sx={{
                    borderRadius: 99,
                    borderColor: isDarkMode ? "#40cfff" : "#ff9800",
                    color: isDarkMode ? "#40cfff" : "#ff9800",
                    fontWeight: 600,
                    "&:hover": {
                      background: isDarkMode
                        ? "rgba(64,207,255,0.08)"
                        : "rgba(255,152,0,0.08)",
                      borderColor: isDarkMode ? "#40cfff" : "#ff9800",
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: 99,
                    background: isDarkMode
                      ? "linear-gradient(90deg, #40cfff 0%, #232a36 100%)"
                      : "linear-gradient(90deg, #ff9800 0%, #ffc107 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    boxShadow: isDarkMode
                      ? "0 2px 8px 0 rgba(31, 38, 135, 0.10)"
                      : "0 2px 8px 0 rgba(255,152,0,0.10)",
                    textTransform: "none",
                    "&:hover": {
                      background: isDarkMode
                        ? "linear-gradient(90deg, #232a36 0%, #40cfff 100%)"
                        : "linear-gradient(90deg, #ffc107 0%, #ff9800 100%)",
                    },
                  }}
                >
                  Update
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Modal>
      <Toast
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default UpdateProductModal;
