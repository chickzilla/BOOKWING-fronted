"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full h-full flex items-center justify-center text-center hover:cursor-pointer">
      <div
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className="h-[100%] flex items-center justify-center"
      >
        Dashboard
        <ExpandMoreIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          autoFocus: true,
        }}
        disableScrollLock={true}
        className="w-full"
      >
        <MenuList>
          <MenuItem onClick={handleClose} className="w-full">
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} className="w-full">
            Settings
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
