import React from 'react'

export default function Projects() {
    return (
        <div className='w-[100vw] my-[100px]'>
            <div className=" w-[100%]  flex-col flex md:flex-row flex-4 items-center justify-center">
                <div className=" w-[90%] md:w-[60%]  grid grid-cols-2 gap-[5%] justify-center items-center">
                    <div className=" w-[100%]  flex flex-col justify-center items-center py-5 m-auto">
                        <h2 className="text-white text-xl  md:text-3xl font-bold">Featured Projects</h2>
                        <p className="text-white "> Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                    <div className=" w-[100%]   py-5  float-right w-auto  m-auto">
                     <div className=" mt-20 m-auto text-end ">
                            <button className='bg-[#ff0000] text-black rounded  p-3 mb-[60px]'>Contact</button>
                        </div>

                    </div>
                    <div className=" w-[100%] shadow shadow-sky-50 flex flex-col justify-center items-center py-5 m-0 md:m-auto">
                        <h2 className="text-white text-4xl font-bold">60+</h2>
                        <p className="text-white "> clients</p>

                    </div>
                    <div className=" w-[100%]  shadow shadow-sky-50 flex flex-col justify-center items-center  py-5 m-auto">
                        <h2 className="text-white text-4xl font-bold">60+</h2>
                        <p className="text-white "> clients</p>

                    </div>
                    <div className=" w-[100%]   shadow shadow-sky-50 flex flex-col justify-center items-center  py-5 m-auto">
                        <h2 className="text-white text-4xl font-bold">60+</h2>
                        <p className="text-white "> clients</p>

                    </div>

                    <div className=" w-[100%]   shadow shadow-sky-50 flex flex-col justify-center items-center  py-5 m-auto">
                        <h2 className="text-white text-4xl font-bold">60+</h2>
                        <p className="text-white "> clients</p>

                    </div>
                     <div className=" bg-slate-800 col-span-2 w-[100%]   shadow shadow-sky-50 flex-col flex md:flex-row justify-around  p-2 md:p-5">
                        <div className="md:w-[50%] w-[100%] flex-col justify-center ">
                         <h1 className="text-white text-4xl">Lets Work Together on Your Next Project</h1>
                         <p className="text-white ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, beatae?</p>
                        </div >
                        <div className=" my-5">
                            <button className='border-2 border-white text-black bg-blue-300 rounded  p-3 '>Contact</button>
                        </div>
                       
                    </div>
                    
                </div>
               
            </div>
        </div>

    );
}
