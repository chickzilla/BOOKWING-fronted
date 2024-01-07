"use client";

import getEventsByOrganizer from "@/libs/getEventsByOrganizer";
import { Event } from "@/interface";
import { useState, useEffect } from "react";
import EventCard from "../EventCard";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCookie, getCookies } from "typescript-cookie";
import getUserProfile from "@/libs/getUserProfile";
import { User } from "@/interface";

export default function ShowOrganizerEvent() {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [organizer, setOrganizer] = useState<string>("");

  useEffect(() => {
    const fetchOrganizer = async () => {
      const token = getCookie("jwt");
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
        const data = await getEventsByOrganizer(organizer);
        setEventList(data);
      } catch (error) {
        setEventList([]);
      }
    };
    fetchEvent();
  }, [organizer]);

  //const deleteHandler = async (id: string) => {

  return (
    <div className="w-[80%] h-[auto] flex flex-col space-y-5 py-5 overflow-x-hidden p-10">
      {eventList.length === 0 ? (
        <div className="text-center text-gray-500 text-4xl">NO EVENT</div>
      ) : (
        eventList.map((event: Event) => (
          <div className="w-[100%] flex flex-row space-x-8" key={event.id}>
            <EventCard Event={event} />
            <Button
              variant="contained"
              sx={{ width: "10%", height: "30vh" }}
              className="hover:bg-[#7B241C] bg-[#B22222] text-xl text-white shadow-xl font-bold"
            >
              <DeleteIcon
                sx={{ marginRight: "8px", width: "40%", height: "50%" }}
              />
            </Button>
          </div>
        ))
      )}
    </div>
  );
}
