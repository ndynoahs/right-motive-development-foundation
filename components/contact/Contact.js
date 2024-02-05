import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
        <div 
            className='px-4 md:px-0'
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
              <p className=" text-white font-bold font-poppins header_lg z-10 "> Contact Us</p>
            <div className='w-full absolute h-[60vh] bg-black opacity-40 '></div>
        </div>

   
        <div className="flex items-center justify-center py-[6rem]">
            <div className="w-[40%] space-y-8">
                <p className="primary_color">CONTACT US</p>
                <p className="header_lg">Feel Free To Contact & Reach Us!</p>
                <p>Etiam! Veniam vulputate vero quam bibendum, metus tempor fringilla rutrum taciti odio rutrum quis, harum faucibus primis pellentesque, porro commod.</p>
                <div className="flex items-center justify-between py-5 px-8  border border_primary rounded-2xl w-[90%]">
                    <div className="">
                        <FaLocationDot size={80} className="text-white p-4 bg_primary rounded-full "/>
                    </div>
                    <div className="w-[75%]">
                        <p className="header_sm"> Head office address: </p>
                        <p>  4671 Sugar Camp Road, Rock Street, San Francisco, United States America </p>
                    </div>
                </div>
                <div className="flex items-center justify-between py-5 px-8  border border_primary rounded-2xl w-[500px]">
                    <div className="">
                        <FaLocationDot size={80} className="text-white p-4 bg_primary rounded-full "/>
                    </div>
                    <div className="w-[75%]">
                        <p className="header_sm"> Head office address: </p>
                        <p>  4671 Sugar Camp Road, Rock Street, San Francisco, United States America </p>
                    </div>
                </div>
                <div className="flex items-center justify-between py-5 px-8  border border_primary rounded-2xl w-[90%]">
                    <div className="">
                        <FaLocationDot size={80} className="text-white p-4 bg_primary rounded-full "/>
                    </div>
                    <div className="w-[75%]">
                        <p className="header_sm"> Head office address: </p>
                        <p>  4671 Sugar Camp Road, Rock Street, San Francisco, United States America </p>
                    </div>
                </div>
            </div>

            <div className="w-[40%]">

            </div>
        </div>

    </div>
  )
}

export default Contact
