'use client'

import { Snackbar, Alert } from "@mui/material";

const Toast = ({ open, message, severity = "success", onClose, autoHideDuration = 3000, anchorOrigin, isDarkMode = false }) => {
  const getBgColor = () => {
    if (severity === "success") return isDarkMode ? "rgba(64, 255, 118, 0.38)" : "rgba(102, 255, 145, 0.9)";
    if (severity === "error") return isDarkMode ? "rgba(244, 67, 54, 0.4)" : "rgba(250, 87, 87, 0.85)";
    if (severity === "warning") return isDarkMode ? "rgba(182, 141, 18, 0.49)" : "rgba(255, 224, 102, 0.9)";
    return isDarkMode ? "rgba(64,207,255,0.15)" : "rgba(255, 224, 102, 0.9)";
  };

  const getTextColor = () => {
    if (severity === "success") return isDarkMode ? "#40cfff" : "#ff9800";
    if (severity === "error") return isDarkMode ? "#ff6f6f" : "#d32f2f";
    if (severity === "warning") return isDarkMode ? "#ffe066" : "#ff9800";
    return isDarkMode ? "#40cfff" : "#ff9800";
  };

  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin || { vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: '100%',
          borderRadius: 3,
          fontWeight: 600,
          fontSize: '1rem',
          letterSpacing: 0.5,
          background: getBgColor(),
          color: getTextColor(),
          boxShadow: isDarkMode
            ? '0 2px 8px 0 rgba(31, 38, 135, 0.10)'
            : '0 2px 8px 0 rgba(255,152,0,0.10)',
          border: isDarkMode ? '1px solid #40cfff' : '1px solid #ff9800',
          '& .MuiAlert-icon': {
            color: getTextColor(),
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
