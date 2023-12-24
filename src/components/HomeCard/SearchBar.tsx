"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState, useEffect } from "react";
import getAllEventName from "@/libs/getAllEventName";
import { EventName } from "@/interface";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [NameData, setNameData] = useState([]);
  const rounter = useRouter();

  useEffect(() => {
    const fetchAllEvent = async () => {
      try {
        const data = await getAllEventName();
        setNameData(data);
        console.log("name all", data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchAllEvent();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="w-[80%] h-[100%] my-auto py-5">
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={NameData.map((option: EventName) => option.name)}
        value={search}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setSearch(newValue);

            NameData.map((subEventName: EventName) => {
              if (subEventName.name === newValue) {
                rounter.push(`/runningevent/${subEventName.id}`);
              }
            });
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="🔍 Event Name"
            sx={{
              "& .MuiInputBase-root": {
                border: "2px solid ", // Set your desired border color
                borderRadius: "50px", // Set your desired border radius
                backgroundColor: "white",
                height: "100%", // Set your desired height
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              },
            }}
          />
        )}
      />
    </div>
  );
}
