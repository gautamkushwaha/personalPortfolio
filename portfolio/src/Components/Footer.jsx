import React from "react";
import ironMan from "../assests/img/ironMan.jpeg";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-[100vw]">
            <div className="w-[100%]">
                <div className=" flex justify-around p-2">
                    <div className="mx-100 mt-[50px]">
                        <ul className="flex text-white">
                            <li className="m-3">Home</li>
                            <li className="m-3"> Project</li>
                            <li className="m-3">About</li>
                            <li className="m-3">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" w-[100vw] shadow shadow-sky-50 p-5 m-1">
        
                    <div className=" flex justify-around ">
                        <uL className="flex  text-center text-white gap-5">
                            <FaFacebookSquare size={30} className="text-white" />
                            <FaInstagram size={30} className="text-white" />
                            <FaTwitterSquare size={30} className="text-white" />
                            <FaGithubSquare size={30} className="text-white" />
                        </uL>
                    </div>
            </div>
        </div>
    );
}
