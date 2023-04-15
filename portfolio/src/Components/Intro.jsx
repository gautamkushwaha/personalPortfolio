import React from "react";
import Gautam from "../assests/img/gautam.jpeg";
import Header from "./Header";
export default function Intro() {
  return (
    <div className=" w-[100vw] bg-black relative ">
     
      <div className="w-[100%] my-[150px] flex-col flex md:flex-row items-center justify-between ">
        <div className="md:w-1/3  md:mx-[60px]">
          <h1 className=" font-bold text-white">
            <img className=" w-[90%] md:w-[70%] h-[80%] md:h-[70%] mb-5 mx-auto" src={Gautam} />
          </h1>
        </div>
        <div className="w-2/3 mx-[60px]">
          <h2 className="text-red-500 font-bold">Hello I am Gautam Kushwaha</h2>
          <h2 className="text-white font-bold text-5xl pt-4">
            Web Developer
          </h2>
          <p className="text-white p-2" >
            {" "}
            I'm available for job in any role of
            programming and here's a link to my I would love job offer in the
            front end aspect and also the backend aspects. You all are free to
            inbox me and ask for any questions or if you want me to teach you or
            your wards.{" "}
          </p>
          <button className='bg-red-500 text-white p-3 m-2 rounded-sm'>About me</button>
        </div>
      </div>
    </div>
  );
}
