import { TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function DetailForm() {
  return (
    <div className="w-[60%] h-[30%] bg-white bg-white rounded-xl shadow-xl flex flex-row py-10 items-center">
      <div className="w-[50%] h-[100%]">
        <div className="w-[80%] h-[12%] text-black text-lg font-semibold text-center">
          Upload picture
        </div>
        <div className="w-[80%] h-[88%] flex flex-col items-center justify-center p-10">
          <AddPhotoAlternateIcon
            sx={{
              "&:hover": { cursor: "pointer" },

              padding: "20px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="w-[50%] h-[100%] flex flex-col items-center">
        <div className="w-[80%] h-[12%] text-black text-lg font-semibold text-center">
          About Event
        </div>
        <div className="w-[80%] h-[88%] flex flex-col overflow-y-auto py-5">
          <TextField
            id="outlined-multiline-static"
            label="Anythings about event"
            multiline
            defaultValue="Default Value"
            sx={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
