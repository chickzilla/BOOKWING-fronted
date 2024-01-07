"use client";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MainButton({
  isDeletingFunc,
}: {
  isDeletingFunc: Function;
}) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="w-[80%] h-[20vh] flex flex-row justify-evenly items-center">
      <Button
        variant="contained"
        sx={{ width: "30%", height: "50%" }}
        className="hover:bg-black bg-[#003049] text-xl text-white shadow-xl font-bold"
        onClick={() => router.push("/addEvent")}
      >
        <AddIcon sx={{ marginRight: "8px" }} />
        Add
      </Button>
      <Button
        variant="contained"
        sx={{ width: "30%", height: "50%" }}
        className={`hover:bg-black ${
          isDeleting ? "bg-black" : "bg-[#003049]"
        } text-xl text-white shadow-xl font-bold`}
        onClick={() => {
          isDeletingFunc(!isDeleting);
          setIsDeleting(!isDeleting);
        }}
      >
        <DeleteIcon sx={{ marginRight: "8px" }} />
        {isDeleting ? "Deleting" : "Delete"}
      </Button>
    </div>
  );
}
