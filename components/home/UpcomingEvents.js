import Image from 'next/image'
import Link from 'next/link'
import camImg_1 from "../../public/image/bosa-charity-img3.jpg"
import { IoLocation } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

const UpcomingEvents = () => {
  return (
    <div className='flex justify-center my-[7rem] md:my-[13rem]'>
        <div className='flex justify-center items-center flex-col w-[85%]  '>
            <p className='primary_color font-bold'>Our Events</p>
            <p className='text-[20px] md:text-[46px] mt-2 font-extrabold font-fairplay'> Up Coming Events</p>
            <div className='md:flex justify-between space-y-[10rem] md:space-y-0 md:space-x-7 mt-9'>
                <div className='relative flex flex-col justify-center w-full md:w-[33%]'> 
                    <div className='relative flex justify-center md:max-w-[320px]'>
                        <Image src={camImg_1} alt="" />
                        <div className='flex flex-col  justify-evenly absolute w-[90%] mx-auto mt-[3rem]  top-1/2 px-4 py-4 border border-[#08cc7f] space-y-5 bg-white'>
                            <p className='text-[19px] font-bold'>Empowering the physically challenged​</p>
                            <div className='flex flex-row md:flex-col lg:flex-row justify-between'>
                                <p className='flex items-center text-[14px] '><FaRegClock size={20} className='pr-2' /> 8am - 12pm </p>
                                <p className='flex items-center text-[14px]'><IoLocation size={20} className='pr-2' />Kaduna Niger </p>
                            </div>
                            <Link href="/" className='primary_color text-[19px] font-bold '>
                                Learn More...
                            </Link>
                        </div>
                    </div>
                </div>  
                <div className='relative flex flex-col justify-center w-full md:w-[33%]'> 
                    <div className='relative flex justify-center md:max-w-[320px]'>
                        <Image src={camImg_1} alt="" />
                        <div className='flex flex-col  justify-evenly absolute w-[90%] mx-auto mt-[3rem]  top-1/2 px-4 py-4 border border-[#08cc7f] space-y-5 bg-white'>
                            <p className='text-[19px] font-bold'>Empowering the physically challenged​</p>
                            <div className='flex flex-row md:flex-col lg:flex-row justify-between'>
                                <p className='flex items-center text-[14px] '><FaRegClock size={20} className='pr-2' /> 8am - 12pm </p>
                                <p className='flex items-center text-[14px]'><IoLocation size={20} className='pr-2' />Kaduna Niger </p>
                            </div>
                            <Link href="/" className='primary_color text-[19px] font-bold '>
                                Learn More...
                            </Link>
                        </div>
                    </div>
                </div>  
                <div className='relative flex flex-col justify-center w-full md:w-[33%]'> 
                    <div className='relative flex justify-center md:max-w-[320px]'>
                        <Image src={camImg_1} alt="" />
                        <div className='flex flex-col  justify-evenly absolute w-[90%] mx-auto mt-[3rem]  top-1/2 px-4 py-4 border border-[#08cc7f] space-y-5 bg-white'>
                            <p className='text-[19px] font-bold'>Empowering the physically challenged​</p>
                            <div className='flex flex-row md:flex-col lg:flex-row justify-between'>
                                <p className='flex items-center text-[14px] '><FaRegClock size={20} className='pr-2' /> 8am - 12pm </p>
                                <p className='flex items-center text-[14px]'><IoLocation size={20} className='pr-2' />Kaduna Niger </p>
                            </div>
                            <Link href="/" className='primary_color text-[19px] font-bold '>
                                Learn More...
                            </Link>
                        </div>
                    </div>
                </div>                  
                    {/* <div className='relative w-[30%]'> 
                        <Image src={camImg_1} alt="" />
                        <div className='flex flex-col items-center bg-white '>
                            <p className='text-[19px] font-bold'>Empowering the physically challenged​</p>
                            <div className='flex'>
                                <p className='flex '><FaRegClock size={15} className='pr-2' /> 8am - 12pm </p>
                                <p className='flex'><IoLocation size={15} className='pr-2' />Kaduna Niger </p>
                            </div>
                            <Link href="/" className='primary_color text-[22px] font-bold'>
                                Learn More...
                            </Link>
                        </div>
                    </div> */}
            </div>
        </div>
    </div>

  )
}

export default UpcomingEvents
