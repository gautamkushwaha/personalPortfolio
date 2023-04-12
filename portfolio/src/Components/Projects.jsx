import React from 'react'

export default function Projects() {
    return (
        <div className='w-full h-[1350px] bg-black'>

            <div class="grid grid-cols-2 gap-10">
                <div className="ml-auto h-[100px] w-[60%] ">
                    <div clasName="flex items-center justify-center ">
                        <h2 className="text-white font-bold text-3xl mt-9"> Featured Projects</h2>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className="mx-auto text-end ">
                    <button className='bg-[#ff0000] text-black rounded my-2 px-2 py-1 md:my-6 md:px-6 md:py-3'>View All</button>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 mb-10">
                <div className=" bg-white ml-auto h-[400px] w-[60%] border border-white">
                    <img src="https://i.pinimg.com/originals/a8/34/53/a83453d89613d942e31374e85186dcff.gif" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold m-2'>To Do List</h2>
                        <p className='text-red-500 ml-3'>Know More</p>
                    </div>
                </div>

                <div className=" bg-white mr-auto h-[400px] w-[60%] border border-white">
                    <img src="https://i.pinimg.com/564x/ae/bc/7c/aebc7c6b21526a2a68e65c9efe2f9a65.jpg" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold m-2'>Portfolio Website</h2>
                        <p className='text-red-500 ml-3'>Know More</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 mt-10">
                <div className=" bg-white ml-auto h-[400px] w-[60%] border border-white">
                    <img src="https://i.pinimg.com/564x/97/0b/7e/970b7ecf95d370c6a300d4b8372bb8e7.jpg" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold m-2'>UI/UX Design</h2>
                        <p className='text-red-500 ml-3'>Know More</p>
                    </div>
                </div>

                <div className=" bg-white mr-auto h-[400px] w-[60%] border border-white">
                    <img src="https://i.pinimg.com/564x/a5/39/37/a53937326c2cec4006733065ec62ee75.jpg" alt="" />
                    <div>
                        <h2 className='text-2xl font-bold m-2'>Eccomerce Website</h2>
                        <p className='text-red-500 ml-3'>Know More</p>
                    </div>
                </div>
            </div>
            <div class="h-[250px] w-[70%] border border-white mx-auto mt-20">
            <div class="grid grid-cols-2">
                <div className=" h-[100px] w-[60%]text-center ">
                    <div clasName="flex items-center justify-center">
                        <h2 className="text-white font-bold text-4xl mt-10 ml-10"> Lets' Work Together on Your Next Project</h2>
                        <p className='text-white ml-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda mollitia quasi temporibus quibusdam totam minus repudiandae atque optio. Mollitia, deserunt.</p>
                    </div>
                </div>
                <div className=" mt-20 m-auto text-end ">
                    <button className='bg-[#ff0000] text-black rounded flex items-center justify-center  md:my-6 md:px-6 md:py-3'>Contact</button>
                </div>
            </div>
            </div>
        </div>

    )
}
