import React, { use } from 'react';
import DigiToolsCart from './DigiToolsCart';
import Tabs from './Tabs';

const DigiTools = ({ digiToolsPromise,carts,setCarts,activeTab,setActiveTab}) => {
    const digiTools = use(digiToolsPromise)
    return (
        <div className='py-15'>
            <div className='text-center space-y-3'>
                <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed  <br /> to boost your productivity and creativity.</p>
                
            </div>
            <Tabs carts={carts} setCarts={setCarts} activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
           
            

            <div className='grid md:grid-cols-2  lg:grid-cols-3 max-w-7xl mx-auto gap-5 mt-10'>
                {digiTools.map(items => 
                <DigiToolsCart key={items.id} carts={carts} setCarts={setCarts}  items={items}></DigiToolsCart>
            )}
            </div>
        </div>
    );
};

export default DigiTools;