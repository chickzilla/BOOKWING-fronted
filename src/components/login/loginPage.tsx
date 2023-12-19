"use client"
import { useState,ChangeEvent } from "react";

export default function LoginPanel() {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleUsernameChange = (event : ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event : ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    return (
        <main>
            <div className="w-[25vw] h-[50vh]  text-black shadow-md flex flex-col items-center ">
                <div className="pt-12 cursor-default"> <h1 className="text-5xl">Login</h1> </div>
                <div className="px-20 pt-8 pb-4">
                    <label htmlFor="Username" className="block text-sm font-light px-2 py-1">Username</label>
                    <input className="w-64 h-12 inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                        id="username"
                        value={username}
                        onChange={(e)=>{
                            handleUsernameChange(e);
                        }}
                    >

                    </input>
                </div>
                <div className="px-20">
                    <label htmlFor="Password" className="block text-sm font-light px-2 py-1">Password</label>
                    <input className="w-64 h-12 inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                        type="password"
                        id="Password"
                        value={password}
                        onChange={(e)=>{
                            handlePasswordChange(e);
                        }}
                    >
                    </input>

                </div>
                <div className="w-64 ">
                    {/* use link instead */}
                    <p className=" pt-2 text-sm text-gray-500 underline ">Forgot Password?</p>
                </div>
                <div className="px-20 pt-8 pb-2">
                    <button className="bg-black w-[100px] h-[50px] rounded-md outline-none bg-rose-400 text-white  
                    hover:border-2 hover:bg-white hover:border-rose-400 hover:text-rose-400 transition-colors"
                    onClick={()=>{
                        // get username and password
                    }}
                    >
                        Log-in
                    </button>
                </div>
                <div className="w-64 text-center">
                    {/* use link instead */}
                    <p className=" pt-2 text-sm text-gray-500 inline">
                        Havn't got account yet? <p className="text-sm text-indigo-500 underline inline">Sign-up</p>
                    </p>
                </div>
            </div>


        </main>
    );
}