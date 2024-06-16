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
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navigate } from "gatsby";

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

  const drawer = (
    <Box onClick={toggleNavDrawer} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} onClick={navToHome}>
        GB Studio City
      </Typography>
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
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginRight: 3,
              display: { xs: "none", sm: "flex" },
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            GB Studio City
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item}
                  className="navbar-link-button"
                  onClick={() => navToPage(item)}
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
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
