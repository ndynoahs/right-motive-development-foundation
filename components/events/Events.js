import { IoLocation } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import image  from "../../public/image/bosa-charity-img3.jpg"

const Events = () => {
  return (
    <div className="relative flex flex-col justify-center  pt-[1rem]">
        <div 
            className='flex items-center justify-center w-full h-[60vh] px-4 md:px-0'
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >   
            <p className=" text-white font-bold font-poppins header_lg z-10 "> Events</p>
            <div className='w-full absolute h-[60vh] bg-black opacity-40 '></div>
        </div>
        <div className="flex flex-col justify-center md:flex-row md:justify-evenly my-[9rem] space-y-9 md:space-y-0 md:space-x-7 ">
            <div 
                className='relative justify-center flex mx-[2rem] lg:w-[500px] h-[65vh] rounded-2xl'
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >   
                <div className="px-4 space-y-7 text-white z-10 ">
                
                    <div className="flex  justify-end my-3">
                        <p className="text-center bg_primary w-[150px]  header_lg md:header_sm px-6 py-2 rounded-xl ">15th <br/> May</p>
                    </div>
                    <div className="space-y-4"> 
                        <p className="text-[32px] font_poppins font-bold"> Help the Poor Donation Campaign</p>
                        <div className='flex  justify-between'>
                            <p className='flex items-center text-[14px] '><FaRegClock size={20} className='pr-2 primary_color' /> 8am - 12pm </p>
                            <p className='flex items-center text-[14px]'><IoLocation size={20} className='pr-2 primary_color' />Kaduna Niger </p>
                        </div>
                        <p className="font-poppins"> We are reaching out to 40 houses to support and help them with food stuffs and basic needs</p>
                    </div>
                    <button className="button_outline ">
                        View Details 
                    </button>        
                </div>
                <div className='w-full absolute h-[65vh] bg-black opacity-60  rounded-3xl '></div>
            </div>
            <div 
                className='relative justify-center flex mx-[2rem] lg:w-[500px] h-[65vh] rounded-2xl'
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >   
                <div className="px-4 space-y-7 text-white z-10 ">
                
                    <div className="flex  justify-end my-3">
                        <p className="text-center bg_primary w-[150px]  header_lg md:header_sm px-6 py-2 rounded-xl ">15th <br/> May</p>
                    </div>
                    <div className="space-y-4"> 
                        <p className="text-[32px] font_poppins font-bold"> Help the Poor Donation Campaign</p>
                        <div className='flex  justify-between'>
                            <p className='flex items-center text-[14px] '><FaRegClock size={20} className='pr-2 primary_color' /> 8am - 12pm </p>
                            <p className='flex items-center text-[14px]'><IoLocation size={20} className='pr-2 primary_color' />Kaduna Niger </p>
                        </div>
                        <p className="font-poppins"> We are reaching out to 40 houses to support and help them with food stuffs and basic needs</p>
                    </div>
                    <button className="button_outline ">
                        View Details 
                    </button>        
                </div>
                <div className='w-full absolute h-[65vh] bg-black opacity-60  rounded-3xl '></div>
            </div>
        </div>

    </div>
  )
}

export default Events
