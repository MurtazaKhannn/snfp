import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer w-full h-1/3 p-10 flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-[#403B58] text-3xl font-bebas'>About Us</h1>
        <div className=' text-[#505168] flex flex-col justifycenter items-center'>
            <h3 className=' font-bebas tracking-wide'>Welcome to <i>Silva Nest</i>, where excellence meets innovation in crafting premium solutions for your everyday needs. With a steadfast commitment to quality, we specialize in creating top-tier file folders, mosquito nets, and wallets that redefine standards of functionality and style.</h3>
            <br /> 
            <p className=' font-bebas tracking-wide'>Email Id  : <i className='font-semibold'>SilvaNest@gmail.com</i></p>
            <p className='font-bebas tracking-wide'>Copyright © 2024 <i>Silva Nest</i> . All rights reserved.</p> 
        </div>
      

      <div>
        <div className='flex gap-10 items-center'>
        <span className='hover:text-pink-600'><FaInstagram size={"1.7rem"} /> </span>
        <span className='hover:text-green-600'><FaWhatsapp size={"1.7rem"} /> </span>
        <span className='hover:text-red-700'><FaYoutube size={"1.7rem"} /></span>
        </div>
      </div>
    </div>
  )
}

export default Footer
