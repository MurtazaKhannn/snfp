import React, { useState, useEffect } from 'react';
import Item from './Item';

const RelatedProducts = ({category}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://silvanestbackend-2mrtrrexv-murtazakhannns-projects.vercel.app/relatedproducts/${category}`) // Update the URL with your backend endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setRelatedProducts(data.relatedProducts);
        } else {
          console.error('Failed to fetch related products:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error fetching related products:', error);
      });
  }, [category]);

  return (
    <div className='related-products mt-20 font-bebas'>
      <h1 className='text-5xl flex items-center justify-center'>Related Products</h1>
      <div className='w-full mt-5 flex justify-center'>
        <hr className='w-1/2 border-2 border-black mb-10' />
      </div>
      <div className='related-products-item flex justify-center'>
        {relatedProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              available = {item.available} 
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
