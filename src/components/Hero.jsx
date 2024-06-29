import React from 'react'
import GB from '../assets/GBI.jpg'
import HI1 from '../assets/2RingsFSDark.jpg'
import HI2 from '../assets/BrownWalletImg.jpg'
import SNC from '../assets/SNClogo.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className='flex h-[88.9vh] w-ful '>
        <div className='left w-[33vw] flex flex-col justify-center p-[120px] leading-tight'>
            <h2 className='text-zinc-800 text-[26px] font-semibold '>ELEVATE YOUR STYLE</h2>
            <div>
                <div className='flex items-center gap-20'>
                <p className='text-[100px] text-zinc-700 font-semibold'>QUALITY</p>
                </div>
                <p>That Will Make You</p>
                <p>Stand Out From Rest</p>
            </div>
            <div className='flex gap-2 justify-center items-center gap-15 width-[310px] h-[70px] border-[7px] rounded-md mt-[30px] bg-orange-300 text-[22px] font-semibold'>
                <p className='font-bebas'>Quality Collection</p>
                {/* <span className='mt-1'>  <FaLongArrowAltRight /> </span> */}
            </div>
            
        </div>
        <div className='right flex relative flex-col items-center justify-center  w-[70vw]  '>
            {/* <img className='hover:scale-105 h-[34vh] absolute top-40 left-40 z-[0] w-[17vw]' src={GB} alt="" />
            <img className='hover:scale-105 h-[24vh] absolute top-20 left-[30vw] -rotate-45' src={HI1} alt="" />
            <img className='hover:scale-105 h-[24vh] absolute top-[50vh] rotate-45 left-[30vw]' src={HI2} alt="" /> */}
            <img className='absolute scale-105 mr-20' w-full src={SNC} alt="" />
            <p className='mt-[55vh] font-bold text-xl text-yellow-600'><i>Unrivaled Quality: Transforming Essentials into Timeless Essentials with Precision.</i></p>
        </div>
    </div>
    </>
  )
}

export default Hero
