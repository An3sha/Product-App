import { FaPlusSquare, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className="w-full flex justify-center"
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      <div
        className="flex justify-between items-center w-full mt-4 mb-6 px-6 py-3"
        style={{
          backdropFilter: 'blur(12px) saturate(180%)',
          background: isDarkMode
            ? 'linear-gradient(90deg, #232a36 0%, #181c24 100%)'
            : 'linear-gradient(90deg, #ffe066 0%, #ff9800 100%)',
          boxShadow: isDarkMode
            ? '0 8px 32px 0 rgba(31, 38, 135, 0.18)'
            : '0 8px 32px 0 rgba(255, 152, 0, 0.10)',
          border: isDarkMode
            ? '1px solid rgba(255,255,255,0.18)'
            : '1px solid rgba(255,223,77,0.18)',
          transition: 'background 0.3s',
        }}
      >
        <Link to="/" className="flex items-center">
          <h1
            className="text-2xl font-bold flex items-center gap-2 tracking-wide"
            style={{ color: isDarkMode ? '#40cfff' : '#ff9800' }}
          >
            Product Store
            <span className="ml-2">
              <FaShoppingCart color={isDarkMode ? "#40cfff" : "#ff9800"} size={28} />
            </span>
          </h1>
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/create">
            <Button
              variant="contained"
              sx={{
                borderRadius: 99,
                marginRight: 2,
                minWidth: 0,
                width: 44,
                height: 44,
                background: isDarkMode
                  ? 'linear-gradient(90deg, #40cfff 0%, #232a36 100%)'
                  : 'linear-gradient(90deg, #ff9800 0%, #ffc107 100%)',
                boxShadow: isDarkMode
                  ? '0 2px 8px 0 rgba(31, 38, 135, 0.10)'
                  : '0 2px 8px 0 rgba(255,152,0,0.10)',
                p: 0,
                '&:hover': {
                  background: isDarkMode
                    ? 'linear-gradient(90deg, #232a36 0%, #40cfff 100%)'
                    : 'linear-gradient(90deg, #ffc107 0%, #ff9800 100%)',
                },
              }}
            >
              <FaPlusSquare size={22} className="text-white" />
            </Button>
          </Link>
          <Button
            onClick={toggleTheme}
            sx={{
              borderRadius: 99,
              minWidth: 0,
              width: 44,
              height: 44,
              background: isDarkMode
                ? 'rgba(64,207,255,0.18)'
                : 'rgba(255,223,77,0.18)',
              color: isDarkMode ? '#40cfff' : '#ff9800',
              fontSize: 22,
              boxShadow: 'none',
              p: 0,
              '&:hover': {
                background: isDarkMode
                  ? 'rgba(64,207,255,0.28)'
                  : 'rgba(255,223,77,0.28)',
              },
            }}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
