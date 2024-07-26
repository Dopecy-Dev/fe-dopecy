import React from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import useStyles from "../../styles";
import LogoGreen from "../logos/LogoGreen";
import ContainedButton from "../buttons/ContainedButton";

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.logo}>
          <LogoGreen />
        </Box>
        <ContainedButton
          style={{ height: 40, borderRadius: "6px", p: "8px, 8px, 8px, 16px" }}
          text="Sign In"
          type="submit"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
