import React from 'react'
import { FaPeopleCarry } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";

const GetInvolved = () => {
  return (
    <div className='flex items-center justify-center py-[6rem] secondary_bg'>
        <div className='w-[90%] md:w-[80%]'>
            <p className='text-center primary_color text-bold'> GET INVOLVED</p>
            <p className='text-center mt-3 text-[26px] md:text-[40px] font-extrabold font-fairplay '>Lets Make A Difference Today</p>
            <div className='space-y-9 md:space-y-0 md:flex justify-between mt-14'>
                <div className='getinvolved_card'>
                    <FaPeopleCarry size={70} className='primary_color'/>
                    <p className='text-[25px] font-extrabold font-fairplay'>Become A Volunteer</p>
                    <p>We welcome volunteers from all around the world. 
                        Please fill the form and we will contact you 
                        for our next program.
                    </p>
                    <button className='button_rounded'>
                        Click here
                    </button>
                </div>
                <div className='getinvolved_card'>
                    <FaDonate size={70} className='primary_color'/>
                    <p className='text-[25px] font-extrabold font-fairplay'>Donate Now</p>
                    <p>We are grateful to everyone who support our work .
                        Please click on the button below to continue 
                        with your donation
                    </p>
                    <button className='button_rounded'>
                        Click here
                    </button>
                </div>
                <div className='getinvolved_card'>
                    <FaPeopleCarry size={70} className='primary_color'/>
                    <p className='text-[25px] font-extrabold font-fairplay'>Become a Partner</p>
                    <p>We love to work with other amazing organizations who share same 
                        interest to archive this great work. 
                        Click to find out more
                    </p>
                    <button className='button_rounded'>
                        Click here
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default GetInvolved
