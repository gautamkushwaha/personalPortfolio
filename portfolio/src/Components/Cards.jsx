import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Cards() {
    return (
        <div className="w-full bg-black h-[450px]">
            <div className="flex flex-5 gap-8">
                {/* cards start here */}

                <div className="w-1/5 border-2 border-white h-[350px] ml-auto ">
                    <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                        <FaFacebookSquare size={50} className="text-white " />
                    </div>

                    <div>{/* <img src={} alt=""/> */}</div>
                    <div>
                        <h2 className="text-white font-bold text-xl ml-[20px]">
                            {" "}
                            UI Design
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
                <div className="w-1/5 border-2 border-white h-[350px]">
                    <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                        <FaFacebookSquare size={50} className="text-white " />
                    </div>

                    <div>{/* <img src={} alt=""/> */}</div>
                    <div>
                        <h2 className="text-white font-bold text-xl ml-[20px]">
                            {" "}
                            UI Design
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
                <div className="w-1/5 border-2 border-white h-[350px] mr-auto">
                    <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                        <FaFacebookSquare size={50} className="text-white " />
                    </div>

                    <div>{/* <img src={} alt=""/> */}</div>
                    <div>
                        <h2 className="text-white font-bold text-xl  ml-[20px]">
                            {" "}
                            UI Design
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
