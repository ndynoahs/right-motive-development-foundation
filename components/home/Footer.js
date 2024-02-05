import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-9 md:py-7 font-semibold   bg-white ">
      <div className="flex  flex-col md:flex-row items-center justify-center i md:justify-between md:w-[80%]">

        <div className="flex items-center space-x-5  ">
            <FaFacebookF size={30} className="border border-gray-400 bg-gray-100  p-2 rounded-full" />
            <FaTwitter size={30} className="border border-gray-400 bg-gray-100  p-2  rounded-full" />
            <FaLinkedin size={30} className="border border-gray-400 bg-gray-100 p-2 rounded-full" />
        </div>  

        <div className=" mt-5 md:mt-0 font-poppins ">
            <p className="text-sm text-gray-600" >
               Copyright © RMFD Foundation. 
               Powered by 
               <Link href="https://kingsleyibe.netlify.app" className="text-black"> Ndy dev</Link>
            </p>
        </div>  
        </div>

    </div>
  )
}

export default Footer
