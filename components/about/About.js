import { FaHandshake } from "react-icons/fa6";

const About = () => {
  const Box = ({icon, title}) => {
    return (
      <div className="flex flex-col items-center justify-center secondary_bg py-8 w-[200px] rounded-2xl">
      <FaHandshake size={65} className="primary_color p-4 border border_primary rounded-full" />
      <p className="header_sm">{title}</p>
    </div>
    )
  }
  
  return (
    <div className="flex flex-col justify-center py-[5rem] ">
        <div 
            className='flex items-center justify-center w-full h-[50vh] px-4 md:px-0 bg-center bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'
        >   
            <p className=" text-white font-bold font-poppins header_lg z-10 "> About</p>
            <div className='w-full absolute h-[50vh] bg-black opacity-40 '></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-0 py-[5rem] space-y-7 md:space-y-0 md:space-x-5">
          <div className="md:w-[440px]"> 
            <p className="header_md">We Work in More Than 3 Cities To Strengthen eqaulity</p>
          </div>
          <div className="md:w-[40%]">
            <p>Aorem ipsum dolor sit amet, consect teturi elit, sed do eiusmod tempor i cididunt ut e span laboris et dolore ma igna aliqua. Ut enim ad minim, qu is nostrud ulla emco laboris nisi ut aliquip ex.</p>
            <p>Vel nibh at velit scelerisque suscipit Lorem ipsum dolor sit amet, consect etuer adipiscing elit Cdui Duis vel nibh at velit scelerisque suscipit.</p>
          </div>
        </div>

        {/* <div className='flex flex-wrap items-center justify-center space-x-4   mt-[5rem]  '>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
        </div> */}

    </div>
  )
}

export default About
