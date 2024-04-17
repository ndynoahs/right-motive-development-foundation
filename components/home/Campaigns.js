import Image from 'next/image'
import image  from "../../public/image/bosa-charity-img3.jpg"


const Campaigns = () => {
  return (
    <div className='flex justify-center items-center '>
        <div className=' w-[95%] lg:w-[80%]'>
            <p className='primary_color'>RECENT CAMPAIGNS</p>
            <div className='md:flex items-center justify-between '>
                <p className=' text-[20px] md:text-[46px] mt-2 font-extrabold font-fairplay'>Donate To Support Our Campaigns </p>
                <button className='button_rounded md:w-[35%] mt-[2rem] md:mt-[5.4rem]'>View All Campaign</button>
            </div>
            <div className='flex flex-col items-center justify-center  md:flex-row md:justify-between space-y-7 md:space-y-0 md:space-x-8 mt-9'>
                <div className='sm:w-[70%] md:w-[550px] border border-[#08cc7f] rounded-3xl px-3 py-5 space-y-9'>
                    <div className='flex items-center justify-center'> 
                    <Image src={image} alt="image" className='rounded-3xl' />
                    </div>
                    <div className='space-y-8 px-4'>
                    
                    <p className='text-[20px] md:text-[27px] mt-2 font-extrabold font-fairplay '>Prosthetic arm for Emeka</p>
                    <div className='flex justify-between'>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='font-poppins text-[14px]'>RAISED</p>
                            <p className='font-fairplay font-bold text-[15px] lg:text-[17px] '>₦8 000</p>
                        </div>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='poppins text-[14px]'>TARGET</p>
                            <p className='font-fairplay font-bold text-[15px] lg:text-[17px]'>₦8 000</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px]'>DUE DATE</p>
                            <p className='font-fairplay font-bold text-[15px] lg:text-[17px]'>26th August 2024 </p>
                        </div>
                    </div>
                    <div className='flex border-2xl rounded-3xl secondary_bg  '>
                        <p className='flex pl-3 font-semibold text-[12px] py-[5px] text-white rounded-l-3xl w-[50%] bg_primary'>Rised Funds <span className='pl-1'> 39%</span></p>
                    </div>
                    <div className='flex justify-between '>
                        <button className='button_rounded'>Donte Now</button>
                        <button className='button_outline'>Program Details</button>
                    </div>
                    </div>
                </div>
                <div className='sm:w-[70%] md:w-[550px] border border-[#08cc7f] rounded-3xl px-3 py-5 space-y-9'>
                    <div className='flex items-center justify-center'> 
                    <Image src={image} alt="image" className='rounded-3xl' />
                    </div>
                    <div className='space-y-8 px-4'>
                    
                    <p className='text-[20px] md:text-[27px] mt-2 font-extrabold font-fairplay '>Prosthetic arm for Emeka</p>
                    <div className='flex justify-between'>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='font-poppins text-[14px]'>RAISED</p>
                            <p className='font-fairplay font-bold text-[15px] lg:text-[17px] '>₦8 000</p>
                        </div>
                        <div className='border-r-2 border-[#08cc7f] pr-10'>
                            <p className='poppins text-[14px]'>TARGET</p>
                            <p className='font-fairplay font-bold text-[15px] lg:text-[17px]'>₦8 000</p>
                        </div>
                        <div className=''>
                            <p className='text-[14px]'>DUE DATE</p>
                            <p className='font-fairplay font-bold text-[15px] lg:text-[17px]'>23th August 2024 </p>
                        </div>
                    </div>
                    <div className='flex border-2xl rounded-3xl secondary_bg  '>
                        <p className='flex pl-3 font-semibold text-[12px] py-[5px] text-white rounded-l-3xl w-[50%] bg_primary'>Rised Funds <span className='pl-1'> 39%</span></p>
                    </div>
                    <div className='flex justify-between '>
                        <button className='button_rounded'>Donte Now</button>
                        <button className='button_outline'>Program Details</button>
                    </div>

                    </div>


                </div>
            </div>
        </div>

    </div>
  )
}

export default Campaigns
