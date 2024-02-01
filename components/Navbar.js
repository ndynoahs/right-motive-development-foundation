"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../public/image/rmdf_logo.png"
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true)

  }
  const closeMenu = () => {
    setMenu(false)
  }
  console.log(menu)
  return (
    <div className='sticky z-40  '>
      <div className='navbar flex fixed justify-between bg-white'>
        <div className='navbar_logo '>
          RMDF
          {/* <Image src={logo} alt="logo" width={250} height={50}/> */}
        </div>
        <IoIosMenu size={30} className='md:hidden cursor-pointer' onClick={openMenu}/>
        <ul className='navbar_menu_list menu_hover'>
          <li>Home</li>
          <li>About</li>
          <li>Campaigns</li>
          <li>Events</li>
          <li>Contact</li>
          <li>Volunteers</li>
        </ul>
      </div>

      {menu &&
      <div className='mobile_menu ' >
          <div className="flex justify-end" >
            <MdClose size={30} onClick={closeMenu} className='cursor-pointer'/>
          </div>
          
          <ul className=' flex flex-col items-center space-y-[2rem] pt-[5rem] text-[22px]  '>
            <li>Home</li>
            <li>About</li>
            <li>Campaigns</li>
            <li>Events</li>
            <li>Contact</li>
            <li>Volunteers</li>
          </ul>
      </div>
      }
    
    </div>
  )
}

export default Navbar
