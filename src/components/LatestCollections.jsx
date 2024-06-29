import React, { useEffect, useState } from 'react'
// import New_Collections from "../assets/LCollections";
import Item from './Item';

const LatestCollections = () => {
  const [New_Collections , setNew_Collections] = useState([]);

  useEffect(() => {
    fetch('https://snbpnestbackend-i9aqei81v-murtazakhannns-projects.vercel.app/newcollections')
   .then(res => res.json())
   .then((data) => setNew_Collections(data));
  } , []);

  
  return (
    <div className='new-collections w-full h-full flex flex-col gap-10 items-center justify-center' >
      <h1 className='text-[3vw] font-bold text-yellow-600 '><i>New Collections</i></h1>
      <hr />
      <div className="collections popular-item flex gap-5">
        {New_Collections.map((item , i) => {
            return (
                <Item key={i} id={item.id} name={item.name} img = {item.image} new_price ={item.new_price} old_price = {item.old_price} available = {item.available} category={item.category}/>
            )
        })}
      </div>
    </div>
  )
}

export default LatestCollections
