import React, { useContext } from 'react'
import { HContext } from '../utils/HomeContext'
import { CiSquareRemove } from 'react-icons/ci';
import { MdCurrencyRupee } from 'react-icons/md';

const CartItems = () => {

    const {getTotalCartAmount , all_Products , cartItem , removeFromCart} = useContext(HContext);
  return (
    <div className='w-full min-h-[88.9vh] cart-items flex flex-col justify-center'>
      <div className="w-full main-format flex justify-center items-center mt-10 mb-4 font-semibold">
        <div className='flex gap-[5vw] w-1/3 justify-center '>
        <p>Products</p>
        <p className='mr-20'>Title</p>
        </div>
        <div className='flex gap-[9vw] w-1/3 justify-center'>
        <p>Price</p>
        <p>Quantity</p>
        </div>

        <div className='flex gap-[11vw] w-1/3 justify-center'>
        <p>Total</p>
        <p>Remove</p>
        </div>
        
        
      </div>
      <hr className='w-1/2 flex items-center ml-[25%] justify-center border-2 '  />
      {all_Products.map((e)=>{
        if(cartItem[e.id] > 0)
        {
            return (
      <div key={e.id}>
        <div className='cart-items-format mt-5 flex justify-evenly h-1/2'>
            <div className='flex w-1/3 justify-evenly'>
            <img className='size-20 w-[6vw]' src={e.image} alt="" />
            <p className='w-1/2 '>{e.name}</p>
            </div>

            <div className='flex gap-[11vw] w-[28vw]'>
            <p>{e.new_price}</p>
            <button className='border-cart-items-quantity mb-40'>{cartItem[e.id]}</button>
            </div>
            
            <div className='flex gap-[12.5vw] w-[20vw]'>
            <p>{e.new_price*cartItem[e.id]}</p>
            <div onClick={() => removeFromCart(e.id)}><CiSquareRemove /></div>
            </div>
            
        </div>
        <span className='w-full flex justify-center'><hr className='mt-5 w-1/3 border-2 ' /></span>
      </div>
            );
        }
        return null ;
      })}
      <div className="cart-items-down flex justify-evenly mt-10 ">
        <div className="cartitems-total flex flex-col gap-3">
            <h1 className='text-3xl font-bold ml-7'>Cart Total</h1>
            <div className='flex flex-col justify-center gap-2'>
                <div className="cart-items-total-item flex font-semibold items-center justify-evenly">
                    <p>SubTotal</p>
                    <p className='flex items-center '><MdCurrencyRupee />{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-items-total-item flex font-semibold items-center justify-evenly">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-total-item flex font-semibold items-center justify-evenly">
                    <h1>Total</h1>
                    <h3 className='flex items-center'><MdCurrencyRupee />{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className='border-2  bg-green-600 text-white px-4 py-2'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode flex flex-col gap-5">
            <p className='font-semibold'>If you have a promo code , Enter it here</p>
            <div className="cart-item-promo-box flex justify-center items-center">
                <input type="text" placeholder='promo code' className='w-full border-2 px-3 py-1 border-black' />
                <button className='border-2  w-1/2  flex justify-center px-[.5vw] py-[.7vh] text-white bg-black'>Code</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
