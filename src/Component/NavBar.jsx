import React from 'react';

const NavBar = () => {
    return (
        <div className='sticky top-0 bg-zinc-100 border border-zinc-200'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-bold text-xl">
                        <h2 className="text-[#4f39f6]">DigiTools</h2>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
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
                    <a className="btn bg-[#4f39f6] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;