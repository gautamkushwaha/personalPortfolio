import React from "react";
import ironMan from "../assests/img/ironMan.jpeg";

export default function Header() {
  return (
    <div className="w-[100vw] bg-black">
      <div className=" flex justify-around p-2">
        <div>
          <img className="w-10 m-1" src={ironMan} />
        </div>
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
  );
}
