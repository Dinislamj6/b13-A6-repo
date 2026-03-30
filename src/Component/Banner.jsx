import React from 'react';
import playImg from "../assets/Play.png"
import bannerImg from "../assets/banner.png"
import logoImg from "../assets/logo.png"

const Banner = () => {
    return (
        <div>
            <div className="relative min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                    {/*  Content */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-[#4f39f6] text-sm font-medium px-5 py-2 rounded-full">
                            <img src={logoImg} alt="logo" /> New: AI-Powered Tools Available
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black">
                            Supercharge Your
                            <br />
                            <span className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black">
                                Digital Workflow
                            </span>
                        </h1>

                        <p className="text-lg text-zinc-700 max-w-lg">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products

                        </p>
                         {/* image */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  px-2 py-2 rounded-full font-semibold  shadow-xl shadow-blue-500/30   text-white">
                               Explore Products
                                {/* <span className="group-hover:translate-x-1 transition">→</span> */}
                            </button>
                            <button className='btn text-[#9514FA] shadow-blue-500/30 border-blue-300  px-4 py-4 rounded-full font-bold  shadow-xl shadow-blue-500/30'>
                                <span><img src={playImg} alt="" /></span>
                                Watch Demo
                                </button>
                        </div>

        
                    </div>

                 
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
                            src={bannerImg}
                            alt="banner image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;