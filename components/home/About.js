import React from 'react'
import Image from "next/image"
import image  from "../../public/image/bosa-charity-img3.jpg"
import { FaCheck } from "react-icons/fa6";

const About = () => {
    
  return (
    <div className='flex flex-col items-center justify-center py-[7rem] '>
        <div className='md:flex justify-between w-[95%] md:w-[98%] lg:w-[80%]'> 
            <div className='relative  md:w-[46%]'>
                <div className='flex flex-col relative '>
                    <Image src={image} alt="" className='rounded-3xl' />
                    <div className='flex  justify-evenly absolute w-[400px] md:w-[380px] mx-auto -translate-x-1/2  mt-[8.5rem]  top-1/2 left-1/2  px-4 py-4 border text-white rounded-2xl bg_primary'>
                        <div className='pr-4 border-r border-white'>
                            <p className='font-fairplay text-[42px]'>10<span>+</span></p>                
                            <p className='font-poppins'>Volunteers</p>
                        </div>
                        <div className='pr-4 border-r border-white'>
                            <p className='font-fairplay text-[42px]'>6<span>+</span></p>                
                            <p className='font-poppins'>Sponsors</p>
                        </div>
                        <div className='pr-4 border-r border-white'>
                            <p className='font-fairplay text-[42px]'>2<span>+</span></p>                
                            <p className='font-poppins'>Branches</p>
                        </div>
                        <div className='border-white'>
                            <p className='font-fairplay text-[42px]'>9<span>+</span></p>                
                            <p className='font-poppins'>Awards</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative md:w-[48%] space-y-9 pt-[9rem] md:pt-0'>
                <div>
                    <p className='primary_color font-bold'>About Us</p> 
                    <p className='text-[20px] md:text-[46px] mt-2 font-extrabold font-fairplay'>Our Work Promise To Uphold The Trust Placed</p>
                    <p className='font-poppind font-light '> We holds so dear the following core value in the establishment of her Foundation</p>
                </div>
                <div className='md:flex justify-between'>
                    <ul className='space-y-3'>
                        <li className='flex'>
                            <FaCheck size={15} className='primary_color mr-3'/>
                            Passion
                        </li>
                        <li className='flex items-center'>
                            <FaCheck size={15} className='primary_color mr-3'/>
                            Integrity
                        </li>
                        <li className='flex items-center'>
                            <FaCheck size={15} className='primary_color mr-3'/>
                            Resilience
                        </li>
                        <li className='flex items-center'>
                            <FaCheck size={15} className='primary_color mr-3'/>
                            Excellence
                        </li>
                    </ul>
                    <div className='flex flex-col items-center justify-center px-10 py-1 mt-9 md:mt-0 text-white border bg_primary rounded-2xl'>
                        <p className='font-fairplay text-[52px] font-extrabold'>5 </p>
                        <p className='font-fairplay text-[20px] font-bold '>Years</p>
                        <p className='font-poppins text-[15px]'>OF EXPERIENCE</p>
                    </div>
                </div>
                <button className='flex button_rounded'>
                    Learn More
                </button>
            </div>
        </div>
      
        <div 
            className='mt-[9rem]'
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "40vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
        
        >
            <div className='flex  w-full justify-evenly absolute z-10 text-gray-100 '> 
              
                <div className='pr-9 font-poppins border-r border-white'>
                    <p className=' text-[52px] font-extrabold'>10<span>+</span></p>                
                    <p className=' dark_color font-extrabold'>Volunteers</p>
                </div>
                <div className='pr-9 border-r border-white'>
                    <p className='text-[52px] font-extrabold'>6<span>+</span></p>                
                    <p className='dark_color font-extrabold'>Sponsors</p>
                </div>
                <div className='pr-9 border-r border-white'>
                    <p className='text-[52px] font-extrabold'>2<span>+</span></p>                
                    <p className='dark_color font-extrabold'>Branches</p>
                </div>
                <div className='border-white'>
                    <p className=' text-[52px] font-extrabold'>9<span>+</span></p>                
                    <p className='dark_color font-extrabold'>Awards</p>
                </div>
            </div>
            <div className='w-full absolute h-[40vh] bg-blue-900 opacity-80 '></div>
        </div>
    </div>
  )
}

export default About
