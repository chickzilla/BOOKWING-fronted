"use client";

import getEventsByOrganizer from "@/libs/getEventsByOrganizer";
import { Event } from "@/interface";
import { useState, useEffect, forwardRef } from "react";
import EventCard from "../EventCard";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { getCookie } from "typescript-cookie";
import getUserProfile from "@/libs/getUserProfile";
import deleteEvent from "@/libs/deleteEvent";
import { User } from "@/interface";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

// Transition for dialog

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShowOrganizerEvent({
  isDeleting,
}: {
  isDeleting: boolean;
}) {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [organizer, setOrganizer] = useState<string>("");
  const [Token, setToken] = useState<string>("");
  const [isDelete, setIsDelete] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrganizer = async () => {
      const token = getCookie("jwt");
      setToken(token || "");
      try {
        if (token) {
          const result = await getUserProfile({ token });
          const user: User = result.user;
          setOrganizer(user.username);
        }
      } catch (error) {
        console.log(error);
        setOrganizer("");
      }
    };
    fetchOrganizer();
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (eventList.length > 0) return;
        const data = await getEventsByOrganizer(organizer, Token);
        setEventList(data);
      } catch (error) {
        setEventList([]);
      }
    };
    fetchEvent();
  }, [organizer, isDelete]);

  const deleteHandler = async (id: string) => {
    try {
      const result = await deleteEvent({ id, token: Token });
      setIsDelete(!isDelete);
      // delete from state
      const newEventList = eventList.filter((event) => event.id !== id);
      setEventList(newEventList);
      alert("delete event success");
    } catch (error) {
      alert("fail to delete event Please Try again");
    }
  };

  // for dialog naja
  const [open, setOpen] = useState(false);
  const [textOpen, setTextOpen] = useState<string>("");
  const [idOpen, setIdOpen] = useState<string>("");
  const handleClickOpen = (id: string, name: string) => {
    setTextOpen(`Delete ${name} ?`);
    setIdOpen(id);
    setOpen(true);
  };

  const handleCloseDelete = () => {
    deleteHandler(idOpen);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-[80%] h-[auto] flex flex-col space-y-5 py-5 overflow-x-hidden p-10">
      {eventList.length === 0 ? (
        <div className="text-center text-gray-500 text-4xl">NO EVENT</div>
      ) : (
        eventList.map((event: Event) => (
          <div className="w-[100%] flex flex-row space-x-8" key={event.id}>
            <EventCard Event={event} />
            {isDeleting ? (
              <Button
                onClick={() => {
                  //deleteHandler(event.id);
                  handleClickOpen(event.id, event.name);
                }}
                variant="contained"
                sx={{ width: "10%", height: "30vh" }}
                className="hover:bg-[#7B241C] bg-[#B22222] text-xl text-white shadow-xl font-bold"
              >
                <DeleteIcon
                  sx={{ marginRight: "8px", width: "40%", height: "50%" }}
                />
              </Button>
            ) : null}
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle className="font-semibold">{textOpen}</DialogTitle>
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
          </div>
        ))
      )}
    </div>
  );
}
