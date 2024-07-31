import React from 'react';
import img1 from "../Images/LauraSmith-Profile.jpg"
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <div class="">
    <div class="max-w-screen-sm container mx-auto mt-16 border-0 bg-slate-900">
        <img src={img1} class="mx-auto w-screen h-96" alt="img"/>
        <div class="text-center text-white">
            <h1 class="font-bold text-4xl">Laura Smith</h1>
            <span class="text-orange-400 text-lg">Frontend Developer</span><br />
            <a href="#" class="underline-offset-0">laurasmith.website</a>
        </div>
        <div class="flex flex-row justify-center space-x-6 mt-6 mb-0">
            <button class="bg-white flex text-md font-semibold cursor-pointer items-center text-center rounded-md px-12 py-2 space-x-2">
                <MdEmail size={20}/>
                <span>Email</span>
            </button>
            <button class="bg-sky-400 flex text-md font-semibold items-center text-center rounded-md px-12 py-2 text-white space-x-2 cursor-pointer">
                <AiFillLinkedin size={20}/>
                <span>Linkedin</span>
            </button>
        </div>
        
    </div>
    </div>
  )
}
