import Image from "next/image"
import image from "../../public/image/bosa-charity-img3.jpg"
import volunteer from "../../public/image/volunteer_1.jpg"
import volunteer2 from "../../public/image/volunter_2.jpg"
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaPeopleCarryBox } from "react-icons/fa6";
const VolunteerAds = () => {
  return (
    <div className="flex flex-col justify-center items-center   secondary_bg  ">
        <div className="flex flex-col items-center justify-center py-[3rem] px-6">
            <p className="primary_color font-bold">MEET OUT TEAM</p>
            <p className="header_md">Our Optimistic Volunteers</p>
           
            <div className='relative md:flex justify-center w-full mt-9 space-y-[5rem] md:space-y-0 md:space-x-6'> 
                <div className='relative '>
                    <Image width="900px" height="400px" src={volunteer} alt="" />
                    <div className='flex flex-col items-center justify-center absolute  w-[90%]  mx-auto mt-[5rem] md:mt-[6rem]  top-1/2 left-[1rem]  px-4 py-4 border border-[#08cc7f] space-y-3 rounded-2xl bg-white'>
                        <p className="primary_color font-bold">Director</p>
                        <p className="header_sm">Hope Azubike</p>
                        <div className="flex justify-center space-x-5  ">
                        <FaFacebookF size={35} className="border border_primary p-2  primary_color rounded-full" />
                        <FaTwitter size={35} className="border border_primary p-2  primary_color rounded-full" />
                        <FaLinkedin size={35} className="border border_primary p-2  primary_color rounded-full" />
                        </div>                            
                    </div>
                </div>
                <div className='relative '>
                    <Image width="900px" height="400px" src={volunteer2} alt="" />
                    <div className='flex flex-col items-center justify-center absolute w-[90%] mx-auto mt-[5rem] md:mt-[6rem]  top-1/2 left-[1rem]  px-4 py-4 border border-[#08cc7f] space-y-3 rounded-2xl bg-white'>
                        <p className="primary_color font-bold">Director</p>
                        <p className="header_sm">Hope Azubike</p>
                        <div className="flex justify-center space-x-5  ">
                        <FaFacebookF size={35} className="border border_primary p-2  primary_color rounded-full" />
                        <FaTwitter size={35} className="border border_primary p-2  primary_color rounded-full" />
                        <FaLinkedin size={35} className="border border_primary p-2  primary_color rounded-full" />
                        </div>                            
                    </div>
                </div>
                <div className='relative '>
                    <Image width="900px" height="400px" src={volunteer} alt="" />
                    <div className='flex flex-col items-center justify-center absolute  w-[90%]  mx-auto mt-[5rem] md:mt-[6rem]  top-1/2 left-[1rem]  px-4 py-4 border border-[#08cc7f] space-y-3 rounded-2xl bg-white'>
                        <p className="primary_color font-bold">Director</p>
                        <p className="header_sm">Hope Azubike</p>
                        <div className="flex justify-center space-x-5  ">
                        <FaFacebookF size={35} className="border border_primary p-2  primary_color rounded-full" />
                        <FaTwitter size={35} className="border border_primary p-2  primary_color rounded-full" />
                        <FaLinkedin size={35} className="border border_primary p-2  primary_color rounded-full" />
                        </div>                            
                    </div>
                </div>
            </div>
        </div>

        <div 
            className='px-4 md:px-0 mt-[9rem]'
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "60vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center'
              }}
        
        >   
         
            <div className='md:flex w-full items-center justify-evenly z-10 text-gray-100   '> 
              <p className="text-[35px] md:text-[42px] font-bold font-poppins "> Lets Change The World<br/> With Humanity</p>
              <button className="flex items-center bg-white text-black font-bold px-5 py-3 mt-5 rounded-md  ">
               <FaPeopleCarryBox size={20} className="mr-3"/> Become a Volunteer
              </button>
            </div>


            <div className='w-full absolute h-[60vh] bg_primary opacity-80 '></div>
        </div>
    </div>
  )
}

export default VolunteerAds
