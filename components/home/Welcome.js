import React from 'react'
import welcomeImg from "../../public/image/bosa-charity-img3.jpg"
import Image from 'next/image'
import { FaCoins } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className=' pt-[10rem] pb-[6rem] flex items-center justify-center'>
      <div className='flex items-center justify-between w-[90%] md:w-[80%]'>
        <div className='welcome_text lg:w-[40%]' >
          <p className='secondary_color text-[60px] font-extrabold font-fairplay '>
              Lets build a better World​
            <span className='primary_color' >Together</span> 
          </p>
          <p className='font-bold mt-5 '>Right Motive Foundation is here to save lives</p>
          <button className='button_square'>Donate Funds <FaCoins size={15} className='ml-2'/> </button>
        </div>
        <div className='welcome_image w-[55%]  hidden lg:block'>
          <Image src={welcomeImg} alt="image" width={600} height={600} className='rounded-full border-8 border-[#08cc7f]'/>
        </div>
      </div>
    </div>
  )
}

export default Welcome
