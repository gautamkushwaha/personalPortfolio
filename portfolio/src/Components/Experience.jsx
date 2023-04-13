import React from "react";

export default function Experience() {
  return (
    <div className="w-[100vw] bg-black mx-auto my-[50px]">
      <div className=" w-[100%] m-auto gap-8 flex-col flex md:flex-row flex-5 items-center justify-center ">
        {/* cards start here */}

        <div className="w-[70%] m-auto md:w-1/5 mb-[20px] mx-auto md:mx-[10px]">
          <div>
            <h2 className="text-white font-bold text-4xl md:text-5xl ml-[20px]">
              3+ Year of Experience
            </h2>
            <br />
          </div>

        </div>
        <div className=" w-[90%] md:w-2/5  mb-[20px] mx-auto md:mx-[10px] grid grid-cols-2 gap-8">
          <div className=" w-[95%]  shadow shadow-sky-100 flex flex-col justify-center items-center py-5 m-auto">
           <h2 className="text-white text-4xl font-bold">60+</h2>
           <p className="text-white "> clients</p>

          </div>
          <div className=" w-[95%]  shadow shadow-sky-100 flex flex-col justify-center items-center  py-5 m-auto">
           <h2 className="text-white text-4xl font-bold">60+</h2>
           <p className="text-white "> clients</p>

          </div>
          <div className=" w-[95%]  shadow shadow-sky-100 flex flex-col justify-center items-center  py-5 m-auto">
           <h2 className="text-white text-4xl font-bold">60+</h2>
           <p className="text-white "> clients</p>

          </div>

          <div className=" w-[95%]  shadow shadow-sky-100 flex flex-col justify-center items-center  py-5 m-auto">
           <h2 className="text-white text-4xl font-bold">60+</h2>
           <p className="text-white "> clients</p>

          </div>
        </div>
      </div>
    </div>
  );
}