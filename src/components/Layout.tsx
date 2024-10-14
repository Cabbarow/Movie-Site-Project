import Navbar from "./Navbar";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Box>
        <Outlet />
      </Box>
      <footer>
        <Box p={2} mt={2}>
          <Typography variant="body2" color="#61697f" align="center">
            © 2024 Tüm Hakları Saklıdır.
          </Typography>
        </Box>
      </footer>
    </>
  );
};

export default Layout;
