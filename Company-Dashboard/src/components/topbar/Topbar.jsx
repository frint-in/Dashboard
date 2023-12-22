import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import './topbar.scss'

const Topbar = () => {
  return (
    <Box display="flex" justifyContent="space-between" position="sticky" className='Topbar'>
      <Box display="flex" className="searchbar">
        <Box display="flex" className="searchField">
          <InputBase placeholder="Search" style={{ width: "100%" }} />
          <IconButton type="button" className="searchButton">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex">
        <Box className="imgBox">
          <img src="/logo-small.png" alt="Frint" />
        </Box>
        <Box className='content'> 
          <Box className="name">Frint</Box>
          <Box className="mail">help.frint@gmail.com</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
