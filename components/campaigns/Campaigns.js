import Image from 'next/image'
import image  from "../../public/image/bosa-charity-img3.jpg"

const Campaigns = () => {
    const Box = ()=> {
        return(
            <div className='w-[100%] sm:w-[75%] md:w-[500px] border border-[#08cc7f] rounded-3xl px-3 py-5 mt-8 space-y-5'>
            <div className='relative flex items-center justify-between w-full'> 
                <Image src={image} alt="image" className='rounded-3xl h-[20rem] w-auto"' />
            </div>
            <div className='space-y-8 px-4 md:px-8'>
            
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
                <p className='flex pl-3  font-semibold text-[12px] py-[5px] text-white  rounded-l-3xl w-[50%] bg_primary'>Rised Funds <span> 39%</span></p>
            </div>
            <div className='flex justify-between '>
                <button className='button_rounded'>Donte Now</button>
                <button className='button_outline'>Program Details</button>
            </div>

            </div>


        </div>
        )
    }

  return (
    <div className='flex flex-col justify-center items-center '>
        <div 
            className='flex items-center justify-center w-full h-[50vh] px-4 md:px-0 bg-center bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'
        >   
            <p className=" text-white font-bold font-poppins header_lg z-10 "> Campaigns</p>
            <div className='w-full absolute h-[50vh] bg-black opacity-40 '></div>
        </div>

        <div className='p-4 md:px-9'>
        
            <div className='flex flex-wrap items-center justify-evenly   my-[5rem]  '>
                <Box />
                <Box />
                <Box />
                <Box />


                {/* <div className='sm:w-[70%] md:w-[550px] border border-[#08cc7f] rounded-3xl px-3 py-5 space-y-9'>
                    <div className='relative flex items-center justify-center w-full'> 
                        <Image src={image} alt="image" style={{ width: '95%', height: '48vh' }} className='rounded-3xl' />
                    </div>
                    <div className='space-y-8 px-8'>
                    
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
                        <p className='flex pl-3  font-semibold text-[12px] py-[5px] text-white  rounded-l-3xl w-[50%] bg_primary'>Rised Funds <span> 39%</span></p>
                    </div>
                    <div className='flex justify-between '>
                        <button className='button_rounded'>Donte Now</button>
                        <button className='button_outline'>Program Details</button>
                    </div>

                    </div>


                </div>
                <div className='sm:w-[70%] md:w-[550px] border border-[#08cc7f] rounded-3xl px-3 py-5 space-y-9'>
                    <div className='relative flex items-center justify-center w-full'> 
                        <Image src={image} alt="image" style={{ width: '95%', height: '48vh' }} className='rounded-3xl' />
                    </div>
                    <div className='space-y-8 px-8'>
                    
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
                        <p className='flex pl-3  font-semibold text-[12px] py-[5px] text-white  rounded-l-3xl w-[50%] bg_primary'>Rised Funds <span> 39%</span></p>
                    </div>
                    <div className='flex justify-between '>
                        <button className='button_rounded'>Donte Now</button>
                        <button className='button_outline'>Program Details</button>
                    </div>

                    </div>
                </div> */}
              
            </div>
        </div>
    </div>
  )
}

export default Campaigns
