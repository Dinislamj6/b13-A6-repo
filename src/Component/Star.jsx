import React from 'react';

const Star = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10 '>
            <div className='flex justify-around p-10 '>
                 <div className='space-y-4'>
                <h2 className='text-3xl font-bold text-white'>50K+</h2>
                <p className='text-white'>Active Users</p>
             </div>
                <div className='space-y-4'>
                   <h2 className='text-3xl font-bold text-white'>200+</h2>
                   <p className='text-white'>Premium Tools</p>
                </div>
                <div className='space-y-4 '>
                    <h2 className='text-3xl font-bold text-white'>4.9</h2>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Star;