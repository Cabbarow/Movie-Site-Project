import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { BiSolidCameraMovie } from "react-icons/bi";

const pages = ["ABOUT MOVIES", "IMDB", "SOON", "CATEGORIES"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#121829", opacity: "1.5", paddingX: "40px" }}
      className="max-[480px]:px-1 px-24"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  paddingTop: "0 !important",
                },
                ".MuiList-root": {
                  paddingBottom: "0 !important",
                  paddingTop: "0 !important",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  sx={{
                    bgcolor: "#121829",
                    color: "#767e94",
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography className=" items-center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                href="/"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#767e94", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <BiSolidCameraMovie className="text-2xl text-[#767e94]" />
          <Typography
            variant="h6"
            sx={{ marginLeft: "15px", color: "#767e94", fontFamily: "cursive" }}
            className="gradientText"
          >
            MOVIE SITE
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
