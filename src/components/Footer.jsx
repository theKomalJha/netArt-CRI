import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoChrome } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='bg-red-500 w-full text-white p-4'>
     <div className='flex lg:flex-row flex-col gap-y-3 mx-auto items-center justify-between'>
        <p className='flex gap-[12px]'><BsFillTelephoneFill className='text-md mt-1 rounded-lg border'/>Toll Free 1800 200 1234</p>
       <a src="https://www.facebook.com/" className='flex gap-1'><FaFacebook className='text-md mt-1 rounded-lg border'/>www.facebook.com</a>
       <a src="https://www.crigroups.com/" className='flex gap-1'><IoLogoChrome className='text-md mt-1 rounded-lg border'/>www.crigroups.com</a>
     </div>
    </div>
  )
}

export default Footer
