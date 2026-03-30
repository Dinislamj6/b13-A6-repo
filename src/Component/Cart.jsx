import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';
import Tabs from './Tabs';
// import cartImg from "../assets/products/shopping-cart.png"
const Cart = ({ carts,setCarts,activeTab,setActiveTab }) => {
    const totalPrice = carts.reduce((sum,item) => sum + item.price ,0)
 
    const handelPayment = () => {
        setCarts([])
        toast.success("Checkout successful!")
    }
    const handelRemove = (item) => {
       const filteredArray = carts.filter(c => c.id != item.id )
       setCarts(filteredArray)
       toast.success("Item Remove Successfully!")
    

    }
    return (
        <div >
            <Tabs carts={carts} setCarts={setCarts} activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
           <div className=' p-10 mb-5 mt-5  max-w-7xl mx-auto border border-zinc-200 shadow-xl'>
             <h2 className='font-bold text-xl'>Your Cart</h2>

            {
                carts.length === 0 ?   <div>
                <div className='flex justify-center'>
                    <ShoppingCart />
                </div>
                <p className='text-center'>Your cart is empty</p>
            </div> : <>
            
          <div className='space-y-3'>
                {
                carts.map(item => <div key={item.id}>

                    <div className='flex justify-between items-center border rounded-lg border-zinc-200 p-5'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-10 h-10 object-contain' src={item.image} alt="" />
                            <div>
                                <h2 className='text-xl font-bold'>{item.name}</h2>
                                <p className='font-semibold'>${item.price}/month</p>
                            </div>

                        </div>
                        <button onClick={ () => handelRemove(item)} className='text-red-500 font-bold'>Remove</button>
                    </div>

                </div>)
            }
          </div>

          {/* total */}
          <div className='flex justify-between bg-zinc-200 p-5 rounded-lg mt-5 text-2xl font-bold'>
              <div>Total:</div>
              <div>{totalPrice}</div>
          </div>

          <button onClick={handelPayment}
           className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full mt-5 text-white text-2xl rounded-full'>Proceed to Checkout</button>
            </>

            }
           </div>
          

        </div>
    );
};

export default Cart;