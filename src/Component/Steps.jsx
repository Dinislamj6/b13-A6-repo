import React from 'react';
import userImg from "../assets/user.png"
import packageImg from "../assets/package.png"
import rocketImg from "../assets/rocket.png"

const Steps = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-3 p-10'>
                <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>


            <div className='grid p-5 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn rounded-full btn-sm  bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
                               <p className='text-white'>01</p>
                            </button>
                        </div>
                      <div className='flex justify-center bg-blue-100 rounded-full w-[70px] h-[70px] mx-auto p-3'>
                          <img className=' object-contain' src={userImg} alt="userImg" />
                      </div>
                      <div className='text-center space-y-2 p-3'>
                        <h2 className='text-xl font-bold'>Create Account</h2>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                      </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn rounded-full btn-sm  bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
                               <p className='text-white'>02</p>
                            </button>
                        </div>
                      <div className='flex justify-center bg-blue-100 rounded-full w-[70px] h-[70px] mx-auto p-3'>
                          <img className=' object-contain' src={packageImg} alt="packageImg" />
                      </div>
                      <div className='text-center space-y-2 p-3'>
                        <h2 className='text-xl font-bold'>Choose Products</h2>
                        <p className='text-[#627382]'>Browse our catalog and select the tools <br />that fit your needs.</p>
                      </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn rounded-full btn-sm  bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
                               <p className='text-white'>03</p>
                            </button>
                        </div>
                      <div className='flex justify-center bg-blue-100 rounded-full w-[70px] h-[70px] mx-auto p-3'>
                          <img className='object-contain' src={rocketImg} alt="rocketImg" />
                      </div>
                      <div className='text-center space-y-2 p-3'>
                        <h2 className='text-xl font-bold'>Start Creating</h2>
                        <p className='text-[#627382]'>Download and start using your premium <br />tools immediately.</p>
                      </div>
                    </div>
                </div>

               

                


             


                
            </div>
        </div>
    );
};

export default Steps;