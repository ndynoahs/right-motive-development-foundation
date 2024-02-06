import React from 'react'

const About = () => {
  return (
    <div>
        <div 
            className='flex items-center justify-center w-full h-[50vh] px-4 md:px-0'
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
        
        >   
              <p className=" text-white font-bold font-poppins header_lg z-10 "> About Us</p>
            <div className='w-full absolute h-[50vh] bg-black opacity-80 '></div>
        </div>
      
    </div>
  )
}

export default About
