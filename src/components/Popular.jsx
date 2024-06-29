import React, { useEffect, useState } from 'react'
import data_Popular from '../assets/dataProduct';
import Item from './Item';

const Popular = () => {
  const [data_Popular , setdata_Popular] = useState([]);

  useEffect(() => {
    fetch('https://snbpnestbackend.vercel.app/popularinfilefolder')
   .then(res => res.json())
   .then((data) => setdata_Popular(data));
  } , []);


  return (
    <div className='popular flex flex-col gap-10 items-center justify-center'>
      <h1 className='text-[3vw] font-bold text-yellow-600 '> <i>Popular in File-Folder</i></h1>
      <hr />
      <div className="popular-item flex gap-5">
        {data_Popular.map((item , i) => {
            return (
                <Item key={i} id={item.id} name={item.name} img = {item.image} new_price ={item.new_price} old_price = {item.old_price} available = {item.available}  category={item.category}/>
            )
        })}
      </div>
    </div>
  )
}

export default Popular
