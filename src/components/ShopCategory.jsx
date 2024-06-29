import React, { useContext } from 'react'
import { HContext } from '../utils/HomeContext'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import Item from './Item'
import Footer from './Footer'

const ShopCategory = (props) => {
  const { all_Products } = useContext(HContext)
  return (
    <div className='shop-category flex flex-col font-bebas'>
      <div className="shopcategory-indexSort text-lg p-2 flex gap-10 justify-between">
        <p>
          <span className='ml-12 mr-1 '>
            Showing 1-8 
          </span>
            out of 14 products
        </p>
        <div className="shop-category-sort flex gap-2 items-center justify-center mr-10">
          Sort by <IoIosArrowDropdownCircle />
        </div>
      </div>
      <div className="shopcategory-products flex flex-wrap">
        {all_Products.map((item , i) => {
          
            if(props.category === item.category){
              return (
                <Item key={i} id={item.id} name={item.name} img = {item.image} new_price ={item.new_price} old_price = {item.old_price} instock = {item.instock} category={item.category} />
              )
            }
            else{
              return null;
            }
          
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default ShopCategory
