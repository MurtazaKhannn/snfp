import React from 'react'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <>
    <div className='item gap-5 w-[23vw] flex flex-col justify-center items-center rounded-md'>
      <Link to={`/product/${props.id}`}> <img className='w-52 hover:scale-105' onClick={window.scrollTo(0,0)} src={props.img} alt="" /> </Link>
      <p className='ml-6'>{props.name}</p>
      <div className='item-price flex gap-10'>
        <div className='item-price-new font-semibold text-[2.3vh] flex items-center justify-center'>
          New Price : <MdOutlineCurrencyRupee /> {props.new_price}
        </div>
        <div className='item-price-old text-[2.3vh]  flex justify-center items-center'>
            MRP : <MdOutlineCurrencyRupee /> <span className='line-through'>{props.old_price}</span>
        </div>
      </div>
      <div className='flex gap-20'>
        <span className='text-lg hover:text-yellow-200 bg-black text-sm text-white p-[.3vw] rounded-md'>{props.available === 'true' ? <p>InStock</p> : <p>OutOfStock</p>}</span>
        {props.category}
      </div>
    </div>
    </>
  )
}

export default Item
