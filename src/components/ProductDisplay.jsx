import React, { useContext, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { HContext } from '../utils/HomeContext';

const ProductDisplay = (props) => {
    // const [leafName , SetLeafName] = useState(null);

    // function leavesSelection(leafName){
    //     SetLeafName(leafName);
    //     console.log(leafName);
    // }

    const product  = props.product ;
    const { addToCart } = useContext(HContext);
    const cat = product.category;
  return (
    <div className='product-display flex min-h-[88.9vh] w-full font-bebas'>
      <div className="product-display-left flex w-1/2">
        <div className="imglist flex flex-col items-center mt-[10vh] gap-5 size-[20%] ml-20 mr-10 mt-10">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className=" main_img h-full flex justify-center items-center mt-[-5vh] w-[70%]">
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right w-1/2 gap-5 flex flex-col justify-center mb-[20vh] mr-5">
        <h1 className='font-semibold font-bebas text-[#403B58] text-5xl'>{product.name}</h1>
        <div className="product-display-right-star flex flex-col gap-3">
            <div className='flex text-2xl'>
                <span className='text-yellow-200'><AiFillStar /></span>
                <span className='text-yellow-200'><AiFillStar /></span>
                <span className='text-yellow-200'><AiFillStar /></span>
                <span className='text-yellow-200'><AiFillStar /></span>
                <span className='text-black' ><AiFillStar /></span>
            </div>
        
        
        <p className='font-semibold font-bebas text-xl'> Rating : 122</p>
        </div>
        <div className="prices flex gap-2 flex-col ">
            <div className="oldprice font-semibold flex items-center font-bebas text-xl">New Price : <BsCurrencyRupee />{product.old_price}</div>
            <div className="newprice flex items-center font-bebas ">M.R.P : <BsCurrencyRupee /><span className='line-through'>{product.new_price}</span></div>
        </div>
        <div className="desc">
            <p className='font-semibold font-bebas text-xl'>Description </p>
            <p className='font-bebas'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi natus excepturi incidunt eveniet adipisci. Reiciendis cum optio possimus animi atque.</p>
        </div>
            

            {cat === "File-Folder" && <div className="leaves flex flex-col gap-2 mt-3 ">
                {/* <div>
                    <h1 className='font-semibold mb-2'>Select No of Leaves</h1>
                    <div className='flex flex-col gap-5'>
                    <div className="numberleaves flex gap-1 ">
                        <div  onClick={() => {leavesSelection("leaf1")}}>{leafName === "leaf1" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>5</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>5 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf2")}}>{leafName === "leaf2" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>10</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>10 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf3")}}>{leafName === "leaf3" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>15</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>15 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf4")}}>{leafName === "leaf4" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>20</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>20 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf5")}}>{leafName === "leaf5" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>25</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>25 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf6")}}>{leafName === "leaf6" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>30</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>30 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf7")}}>{leafName === "leaf7" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>35</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>35 </div> }</div>
                        <div  onClick={() => {leavesSelection("leaf8")}}>{leafName === "leaf8" ? <div className='border-2 px-3 py-1 rounded-full border-yellow-500'>40</div> : <div className='border-2 px-3 py-1 rounded-full hover:border-yellow-500'>40 </div> }</div>
                    </div>
                </div>
                </div>  */}
            </div>}
                <button  onClick={()=>{addToCart(product.id); alert("Product added to cart")}} className='w-[8vw] font-semibold border-4 border-[#403B58] bg-[#403B58] text-white rounded-md px-3 py-1 font-bebas text-xl ' >Add To Cart</button>
                
                </div>

                
    </div>
  )
}

export default ProductDisplay
