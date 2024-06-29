import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Popular from './Popular'
import LatestCollections from './LatestCollections'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className='w-full h-[88.9vh]'>
      <Hero/>
      <Popular/>
      <LatestCollections/>
      <Footer/>

    </div>
    </>
  )
}

export default Home
