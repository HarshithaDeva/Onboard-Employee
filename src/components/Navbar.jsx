import React from "react";
import { AppBar, Toolbar, InputBase, IconButton, Box } from "@mui/material";
import Search from "../assets/images/Search.svg";
import Notification from "../assets/images/Notification.svg";
import Avatar from "../assets/images/Avatar.svg";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ boxShadow: "none", width: "100%", backgroundColor: "#fff" }}
    >
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          mb: "24px",
          paddingRight: "0 !important",
        }}
      >
        <Box
          sx={{
            width: "540px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: "auto",
            border: "1px solid #eee",
            padding: "0 20px",
            borderRadius: "8px",
          }}
        >
          <InputBase
            placeholder="Search or Jump to..."
            inputProps={{ "aria-label": "search" }}
            sx={{ ml: 1, flexGrow: 1 }}
          />
          <IconButton size="large" aria-label="search">
            <Box component="img" src={Search} />
          </IconButton>
        </Box>
        <IconButton size="large" aria-label="account" color="inherit">
          <Box component="img" src={Notification} />
        </IconButton>
        <IconButton size="large" aria-label="cart" color="inherit">
          <Box component="img" src={Avatar} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
