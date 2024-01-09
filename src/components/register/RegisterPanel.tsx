"use client";
import { useState, ChangeEvent } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import Register from "@/libs/Register";

export default function RegisterPanel() {
  const router = useRouter();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailTest.test(email);
  };

  const handleSubmit = async () => {
    if (
      !firstname ||
      !lastname ||
      !email ||
      !username ||
      !password ||
      !password2
    ) {
      alert("Please fill all information");
    } else if (password != password2) {
      alert("Password not match");
    } else if (validateEmail(email) === false) {
      alert("Please enter valid email");
    } else {
      try {
        const result = await Register({
          firstname,
          lastname,
          email,
          username,
          password,
        });
        alert("Register success");
        router.push("/login");
      } catch (e) {
        alert("fail to register. Try again with new Username");
      }
    }
  };
  return (
    <div className="w-[30vw] h-[80vh] bg-white dark:bg-gray-400 flex flex-col items-center text-black rounded-md shadow-xl py-5 justify-between">
      <div className="text-black text-2xl font-semibold dark:text-gray-800">
        Create an accout
      </div>
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        required
        sx={{
          width: "90%",
        }}
        size="small"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
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
        label="Lastname"
        variant="outlined"
        required
        sx={{
          width: "90%",
        }}
        size="small"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
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
        label="Email"
        type="email"
        variant="outlined"
        sx={{
          width: "90%",
        }}
        size="small"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />

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
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        type="password"
        sx={{
          width: "90%",
        }}
        size="small"
        required
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
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
            className="border-2 border-rose-400 bg-rose-400 dark:bg-slate-700 dark:border-slate-700 dark:hover:bg-gray-400 dark:hover:text-slate-700 text-white py-2 px-3 rounded z-30 w-[100%] font-semibold  hover:text-rose-400 transition-colors hover:bg-white"
            onClick={() => handleSubmit()}
          >
            Register
          </button>
        </div>
        <div className="text-center w-[90%] border-t-2 pt-5 dark:border-t-slate-700">
          <button
            className="border border-black border-2 text-black py-2 px-3 rounded z-30 w-[100%] hover:bg-slate-700 hover:text-white transition-colors"
            onClick={() => {
              router.push("/login");
            }}
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
