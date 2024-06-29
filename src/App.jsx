import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ShopCategory from './components/ShopCategory'
import Product from './components/Product'
import Cart from './components/Cart'
import LoginSignUp from './components/LoginSignUp'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (

    <>
    
    <div className='w-full h-screen flex-col b g-gradient-to-r from-[#E0DFD5] to-white'>
    <Navbar/>
    

    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/filefolder' element={<ShopCategory category="File-Folder"/>}></Route>
        <Route path='/wallet' element={<ShopCategory category="Wallet"/>}></Route>
        <Route path='/mosquitonet' element={<ShopCategory category="Mosquito-Net"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':id' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>
      </Routes>


    </div>
     
     </>
    
    
    
  )
}

export default App
