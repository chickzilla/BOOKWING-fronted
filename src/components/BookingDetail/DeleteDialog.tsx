"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useEffect, useState } from "react";

import { getCookie } from "typescript-cookie";
import deleteBooking from "@/libs/deleteBooking";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteDialog({
  parent_open,
  setparent_Open,
  bookingID,
  setIsDelete,
}: {
  parent_open: boolean;
  setparent_Open: Function;
  bookingID: string;
  setIsDelete: Function;
}) {
  const [open, setOpen] = useState<boolean>(parent_open);
  const handleClose = () => {
    setOpen(false);
    setparent_Open(false);
  };

  const handleCloseDelete = async () => {
    setOpen(false);
    setparent_Open(false);
    setIsDelete(true);
    const token = getCookie("jwt");
    if (token) {
      try {
        const res = await deleteBooking(bookingID, token);
        alert("Real Delete success");
      } catch (error) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    setOpen(parent_open);
  }, [parent_open]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete this event?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Delete this event cannot be undone and all data will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          className="hover:bg-black bg-gray-500 text-white shadow-xl"
        >
          Mai
        </Button>
        <Button
          onClick={() => {
            handleCloseDelete();
          }}
          className="hover:bg-[#7B241C] bg-[#B22222] text-white shadow-xl"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
