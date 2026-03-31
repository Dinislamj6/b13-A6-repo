import React from 'react';
import cartImg from "../assets/products/shopping-cart.png"

const NavBar = ({ carts, setActiveTab }) => {
    return (
        <div className='sticky top-0 shadow-2xl lg:z-20 z-20 bg-zinc-100 border border-zinc-200'>
            <div className="navbar max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-bold text-2xl">
                        <h2 className="text-[#4f39f6]">DigiTools</h2>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg text-[#101727]">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>



                <div className="navbar-end gap-5">
                    <div>
                        {
                            carts.length === 0 ? null : <div className='bg-red-500 absolute top-2 lg:right-46 right-[120px]  rounded-full text-center text-white px-2'>
                                {`${carts.length}`}
                            </div>
                        }
                        <img onClick={() => setActiveTab("cart")} className='h-5 w-5 relative ' src={cartImg} alt="" />
                    </div>
                    <button className='hidden sm:block'>Login</button>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;