import React from "react";
import Gautam from "../assests/img/gautam.jpeg";
export default function Intro() {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] h-[500px] mx-auto md:flex flex-cols-3 justify-between py-[100px]">
        <div className="w-1/3 mx-[60px]">
          <h1 className="text-[20px] font-bold text-white">
            <img className="" src={Gautam} />
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
