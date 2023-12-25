"use client";

import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EventType_Data from "@/data/eventType";
import Link from "next/link";

export default function NavbarDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-[100%] flex items-center justify-center text-center hover:cursor-pointer">
      <div
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className="h-[100%] flex items-center justify-center w-[100%]"
      >
        Running Types
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
          {EventType_Data.map((item, index) => (
            <MenuItem
              onClick={handleClose}
              className="w-full "
              key={index}
              sx={{ marginY: "10px" }}
            >
              <Link href={`/running_type/${item.link}`}>{item.title}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
