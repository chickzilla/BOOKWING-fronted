"use client";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

export default function MainButton() {
  const router = useRouter();

  return (
    <div className="w-[80%] h-[20vh] flex flex-row justify-between items-center">
      <Button
        variant="contained"
        sx={{ width: "20%", height: "50%" }}
        className="hover:bg-black bg-[#003049] text-xl text-white shadow-xl font-bold"
        onClick={() => router.push("/addEvent")}
      >
        <AddIcon sx={{ marginRight: "8px" }} />
        Add
      </Button>
    </div>
  );
}
