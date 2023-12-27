"use client"
import { useState, ChangeEvent } from "react";


export default function RegisterPanel() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password2, setPassword2] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleFirstnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
    };
    const handleLastnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    };
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePassword2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value);
    };
    return (
        <div className="w-[25vw] h-[80vh] bg-white flex flex-col items-center text-black rounded-md shadow-md ">
            <h1 className="text-black text-5xl font-bold mt-16">Register</h1>
            <div className="mt-8 w-[60%] h-[7%]">
                <label htmlFor="Firstname" className="block text-sm font-light px-2 py-1 ">Fistname</label>
                <input className="w-full h-full inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                    id="Firstname"
                    required
                    value={firstname}
                    onChange={(e) => {
                        handleFirstnameChange(e);
                    }}
                >
                </input>
            </div>
            <div className="mt-8 w-[60%] h-[7%]">
                <label htmlFor="Lastname" className="block text-sm font-light px-2 py-1 ">Lastname</label>
                <input className="w-full h-full inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                    id="Lastname"
                    required
                    value={lastname}
                    onChange={(e) => {
                        handleLastnameChange(e);
                    }}
                >
                </input>
            </div>
            <div className="mt-8 w-[60%] h-[7%]">
                <label htmlFor="Email" className="block text-sm font-light px-2 py-1 ">Email</label>
                <input className="w-full h-full inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                    id="Email"
                    required
                    value={email}
                    onChange={(e) => {
                        handleEmailChange(e);
                    }}
                >
                </input>
            </div>
            <div className="mt-8 w-[60%] h-[7%]">
                <label htmlFor="Username" className="block text-sm font-light px-2 py-1 ">Username</label>
                <input className="w-full h-full inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                    id="username"
                    required
                    value={username}
                    onChange={(e) => {
                        handleUsernameChange(e);
                    }}
                >

                </input>
            </div>
            <div className="mt-8 w-[60%] h-[7%] ">
                <label htmlFor="Password" className="block text-sm font-light px-2 py-1 ">Password</label>
                <input className="w-full h-full inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                    type="password"
                    id="Password"
                    required
                    value={password}
                    onChange={(e) => {
                        handlePasswordChange(e);
                    }}
                >
                </input>
            </div>
            <div className="mt-8 w-[60%] h-[7%]">
                <label htmlFor="Password2" className="block text-sm font-light px-2 py-1 ">Confirm Password</label>
                <input className="w-full h-full inline px-2 bg-gray-100 rounded-sm
                    focus:border-b-2 focus:border-rose-500 focus:bg-white 
                    transition duration-300 ease-out focus:outline-none"
                    type="password"
                    id="Password2"
                    required
                    value={password2}
                    onChange={(e) => {
                        handlePassword2Change(e);
                    }}
                >
                </input>

            </div>

            <button className="mt-10 py-3 px-8 text-white border-2 outline-none border-white bg-rose-400 rounded-md hover:border-2 hover:bg-white hover:border-rose-400 hover:text-rose-400 transition-colors">
                Register
            </button>

        </div>
    );
}