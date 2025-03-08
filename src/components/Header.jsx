import React from "react";
import { AppBar, Box } from "@mui/material";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-box">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgb(29, 53, 87)", // Dark blue theme
          display: "flex",
          justifyContent: "center",
          padding: "10px 20px",
        }}
      >
        <Box className="header-title">
          <h1 className="title">CodeSprint</h1>
          <p className="subtitle">
            Brought to you by <span className="highlight">CodeIIEST</span> and <span className="highlight">ASCE</span>
          </p>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
