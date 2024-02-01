import Image from 'next/image'
import React from 'react'
import image  from "../../public/image/bosa-charity-img3.jpg"


const Campaigns = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[90%] lg:w-[80%]'>
            <p className='primary_color'>RECENT CAMPAIGNS</p>
            <div className='flex items-center justify-between '>
                <p className='min-w-[60%] text-[20px] md:text-[46px] mt-2 font-extrabold font-fairpla'>Donate To Support Our Campaigns </p>
                    <button className='button_rounded mt-[5.4rem]'>View All Campaign</button>
            </div>
            <div className='flex justify-between space-x-8 mt-9'>
                <div className='min-w-[400px] border  border-[#08cc7f] rounded-3xl px-3 py-5 space-y-9'>
                    <Image src={image} alt="image" className='rounded-3xl' />
                    <div className='space-y-8 px-2'>
                    
                    <p className='text-[20px] md:text-[26px] px-3 mt-2 font-extrabold font-fairplay '>Prosthetic arm for Emeka</p>
                    <div className='flex justify-between'>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='font-poppins text-[14px]'>RAISED</p>
                            <p className='font-fairplay font-bold text-[16px] lg:text-[20px]'>₦8 000</p>
                        </div>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='poppins text-[14px]'>TARGET</p>
                            <p className='font-fairplay font-bold text-[18px] lg:text-[20px]'>₦8 000</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px]'>DUE DATE</p>
                            <p className='font-fairplay font-bold text-[18px] lg:text-[20px]'>23th August 2024 </p>
                        </div>
                    </div>
                    <div className='flex border-2xl rounded-3xl secondary_bg  '>
                        <p className='flex pl-3  font-semibold text-[12px] py-[5px] text-white  rounded-l-3xl w-[50%] primary_background'>Rised Funds <span> 39%</span></p>
                    </div>
                    <div className='flex justify-between '>
                        <button className='button_rounded'>Donte Now</button>
                        <button className='button_outline'>Program Details</button>
                    </div>

                    </div>


                </div>
                <div className='min-w-[400px] border  border-[#08cc7f] rounded-3xl p-3 space-y-9'>
                    <Image src={image} alt="image" className='rounded-3xl' />
                    
                    <p className='text-[20px] md:text-[26px] px-3 mt-2 font-extrabold font-fairplay '>Prosthetic arm for Emeka</p>
                    <div className='flex justify-evenly'>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='font-poppins text-[14px]'>RAISED</p>
                            <p className='font-fairplay font-bold text-[18px] lg:text-[20px]'>₦8 000</p>
                        </div>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='poppins text-[14px]'>TARGET</p>
                            <p className='font-fairplay font-bold text-[18px] lg:text-[20px]'>₦8 000</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px]'>DUE DATE</p>
                            <p className='font-fairplay font-bold text-[18px] lg:text-[20px]'>23th August 2024 </p>
                        </div>
                    </div>
                    <div className='flex border-2xl rounded-3xl secondary_bg mx-3 '>
                        <p className='flex pl-3  font-semibold text-[12px] py-[5px] text-white  rounded-l-3xl w-[50%] primary_background'>Rised Funds <span> 39%</span></p>
                    </div>
                    <div className='flex justify-between '>
                        <button className='button_rounded'>Donte Now</button>
                        <button className='button_outline'>Program Details</button>
                    </div>


                </div>
            </div>
        </div>

    </div>
  )
}

export default Campaigns
