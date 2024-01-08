"use client";
import { useState, ChangeEvent } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation";
import Login from "@/libs/Login";

import { getCookie, setCookie, getCookies } from "typescript-cookie";

export default function LoginPanel() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!username || !password) {
      alert("Please fill all information");
    } else {
      try {
        const result = await Login({
          username,
          password,
        });
        setCookie("jwt", result.AccessToken);
        // router.push("/");
        location.href = "/";
      } catch (error) {
        alert("Username or Password is incorrect");
      }
    }
  };
  return (
    <div className="w-[30vw] h-[50vh] bg-white flex flex-col items-center text-black rounded-md shadow-xl py-5 justify-between">
      <div className="text-black text-2xl ">Sign in</div>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        required
        sx={{
          width: "90%",
        }}
        size="small"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        sx={{
          width: "90%",
        }}
        type="password"
        size="small"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      <div className="w-[100%] flex flex-col text-center items-center">
        <div className="text-center w-[90%] mb-5">
          <button
            className="border-2 border-rose-400 bg-rose-400 text-white py-2 px-3 rounded z-30 w-[100%] font-semibold  hover:text-rose-400 transition-colors hover:bg-white"
            onClick={() => {
              handleSubmit();
            }}
          >
            Sign in
          </button>
        </div>
        <div className="text-center w-[90%] border-t-2 pt-5">
          <button
            className="border border-black border-2 text-black py-2 px-3 rounded z-30 w-[100%] hover:bg-slate-700 hover:text-white transition-colors"
            onClick={() => {
              router.push("/register");
            }}
          >
            Dont have an account? Create new
          </button>
        </div>
      </div>
    </div>
  );
}
