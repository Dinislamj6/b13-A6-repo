import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10 p-20'>

            <div className='text-center text-[#FFFFFF] space-y-3' >
                <h2 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
            </div>

            <div className='flex justify-center gap-x-2 mt-6'>
                <button className='text-[#9514FA] btn rounded-full'>Explore Products</button>
                <button className='btn rounded-full text-white bg-transparent'>View Pricing</button>
            </div>
            <p className='text-center mt-3 text-[#FFFFFF]'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkFlow;