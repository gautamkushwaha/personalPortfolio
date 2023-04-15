import React from "react";
import { CgWebsite } from 'react-icons/cg';
import {SiGoogleoptimize} from 'react-icons/si';
import {TfiWrite} from 'react-icons/tfi';




export default function Cards() {
    return (
        <div className="w-[100vw] bg-black mx-auto my-auto">
            <div className=" w-[90%] m-auto gap-8 flex-col flex md:flex-row flex-5 items-center justify-center ">
                {/* cards start here */}

                <div className="w-[80%] md:w-[50%] md:w-[50%] m-auto md:w-1/5 shadow shadow-sky-100 mb-[20px] mx-auto md:mx-[10px]">
                    <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                        <CgWebsite size={50} className="text-white " />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-xl ml-[20px]">
                           Web Developer
                        </h2>
                        <br />
                    </div>
                    <div className="text-white ml-[20px]">
                        <p clasaName="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Consequuntur,
                        </p>
                        <p className="mt-10"> Know more--</p>
                    </div>
                </div>
                <div className=" w-[80%] md:w-[50%] md:w-1/5 shadow shadow-sky-100 mb-[20px] mx-auto md:mx-[10px]">
                    <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                        <SiGoogleoptimize size={50} className="text-white " />
                    </div>

                    <div>{/* <img src={} alt=""/> */}</div>
                    <div>
                        <h2 className="text-white font-bold text-xl ml-[20px]">
                         SEO Analyser
                        </h2>
                        <br />
                    </div>
                    <div className="text-white ml-[20px]">
                        <p clasaName="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Consequuntur,
                        </p>
                        <p className="mt-10"> Know more--</p>
                    </div>
                </div>
                <div className="w-[80%] md:w-[50%] md:w-1/5 shadow shadow-sky-100 mb-[20px] mx-auto md:mx-[10px]">
                    <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                        <TfiWrite size={50} className="text-white " />
                    </div>

                    <div>{/* <img src={} alt=""/> */}</div>
                    <div>
                        <h2 className="text-white font-bold text-xl  ml-[20px]">
                           Content Writer
                        </h2>
                        <br />
                    </div>
                    <div className="text-white ml-[20px]">
                        <p clasaName="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Consequuntur,
                        </p>
                        <p className="mt-10"> Know more--</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
