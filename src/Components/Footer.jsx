import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div class="max-w-screen-sm container mx-auto bg-slate-900 mb-16">
        <ul class="text-white flex justify-center space-x-2 py-6">
            <li class="cursor-pointer">
                <FaTwitterSquare size={25} />
            </li>
            <li class="cursor-pointer">
                <FaSquareFacebook size={25} />
            </li>
            <li class="cursor-pointer">
                <FaInstagram size={25} />
            </li>
            <li class="cursor-pointer">
                <FaGithub size={25} />
            </li>
        </ul>
        <div class="text-white py-2 text-center flex justify-center space-x-2">
            <p>Copy rights.</p>
            <span>@2024.</span>
            <p>Tharun kumar Nadam.</p>
        </div>
    </div>
  )
}

export default Footer;