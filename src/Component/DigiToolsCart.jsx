import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DigiToolsCart = ({items,carts,setCarts}) => {
    const [buyNow,setBuyNow] = useState(false)
    const handelBuyNow = () => {
        setBuyNow(true)
        setCarts([...carts,items])
        toast.success("Item added to cart!")
    }
    return (
        <div>
                 <div className='shadow-lg rounded-lg border border-zinc-200 shadow-2xl p-5'>
                     <div>
                        <button className='btn rounded-full'>
                            <img className='h-4 w-4 object-contain'   src={items.image} alt="" />
                            </button>
                     </div>

                     <div className='space-y-3'>
                       <h2 className='text-2xl font-bold'>{items.name}</h2>
                       <p>{items.description}</p>
                        <div className='text-xl font-bold'>${items.price}/month</div>

                        <div>
                            <p>{items.features.f1}</p>
                            <p>{items.features.f2}</p>
                            <p>{items.features.f3}</p>
                            <p>{items.features.f4}</p>
                             <button onClick={()=> handelBuyNow()}
                              className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-white mt-5'>{buyNow?"Added to Cart!": "Buy Now"}</button>
                        </div>
                       
                     </div>
                </div>
        </div>
    );
};

export default DigiToolsCart;