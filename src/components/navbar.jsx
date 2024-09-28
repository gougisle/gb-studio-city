import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { darkGrey } from "../utils/siteThemeColors";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
  };
  const drawerWidth = 240;
  const navItems = ["Schedule", "About", "Contact"];

  const navToPage = (path) => {
    const lowerCasePath = path.toLocaleLowerCase();
    navigate(`/${lowerCasePath}`);
  };

  const navToHome = () => {
    navigate("/");
  };

  const navButtonLinkStyle = {
    color: "white",
    marginRight: "15px",
    transition: "300ms all",
    "&:hover": { color: darkGrey },
  };

  const mobileViewDrawer = (
    <Box onClick={toggleNavDrawer} sx={{ textAlign: "center" }}>
      <Box onClick={navToHome}>
        <StaticImage
          src="../images/Gracie_Barra_Logo.png"
          alt="Gracie Barra Logo"
          placeholder="blurred"
          style={{ width: "50%", padding: 2 }}
        />
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={() => {
              navToPage(item.toLocaleLowerCase());
            }}
            className="navbar-button-link"
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="static" className="tester-style">
        <Toolbar
          sx={{
            backgroundColor: "#317dc3",
            paddingY: 1,
          }}
          className="tester-style"
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleNavDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "6rem",
              marginRight: 3,
              display: { xs: "none", sm: "flex" },
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <StaticImage
              src="../images/Gracie_Barra_Logo.png"
              alt="Gracie Barra Logo"
              placeholder="blurred"
              style={{ width: "100%" }}
              onClick={navToHome}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Box>
              {navItems.map((item) => (
                <Button
                  size="large"
                  key={item}
                  onClick={() => navToPage(item)}
                  sx={navButtonLinkStyle}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={toggleNavDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {mobileViewDrawer}
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
