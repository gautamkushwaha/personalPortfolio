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
        <div className="w-[100%] h-[200px] bg-black ">
            <div className="w-[100vw] bg-black">
                <div className=" flex justify-around p-2">
                    <div className="mx-100 ">
                        <ul className="flex text-white">
                            <li className="m-3">Home</li>
                            <li className="m-3"> Project</li>
                            <li className="m-3">About</li>
                            <li className="m-3">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" w-[100vw] h-[125px] border border-white bg-black">
        
                    <div className=" flex justify-around mt-10 ">
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
