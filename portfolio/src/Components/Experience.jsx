import React from "react";

export default function Experience() {
  return (
    <div className="w-full bg-black h-[450px]">
      <div className="flex flex-5 gap-8">
        {/* cards start here */}

        <div className="w-1/5  h-[350px] ml-auto">
          <div className="">
            <h2 className="text-white font-bold text-5xl mx-10 my-20">
              3+ <br />
              Years Experience
            </h2>
          </div>
        </div>
        <div className="w-1/5  h-[350px]">
          <div class="flex flex-col ...">
            <div className="border-2 border-white h-[150px] mt-[10px] ">
                <div classname="">
                    <h className="text-white text-5xl">5+</h>
                    <p className="text-white  "> clients</p>
                </div>
            </div>
            <div className="border-2 border-white h-[150px] mt-[10px]">
            <div classname="">
                    <h className="text-white text-5xl ">5+</h>
                    <p className="text-white   m-auto"> Projects</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-1/5  h-[350px] mr-auto">
          <div class="flex flex-col ...">
            <div className="border-2 border-white h-[150px] mt-[10px]">
            <div classname="">
                    <h className="text-white text-5xl ">3+</h>
                    <p className="text-white  m-auto"> Years of Working</p>
                </div>
            </div>
            <div className="border-2 border-white h-[150px] mt-[10px]">
            <div classname="">
                    <h className="text-white text-5xl ">5+</h>
                    <p className="text-white   m-auto">Achievements</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
