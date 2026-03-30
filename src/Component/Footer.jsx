import { WashingMachine } from 'lucide-react';
import React from 'react';
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import xImg from "../assets/x.png"

const Footer = () => {
    return (
        <footer className="bg-[#101727] border-t border-red-900/50 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-15 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
            
                            <h2 className="text-3xl font-bold tracking-tighter text-white">
                               DigiTools
                            </h2>
                        </div>

                        <p className="text-white text-lg max-w-md">
                            Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold mb-6 text-xl">Product</h3>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                 Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                  Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                  Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                 Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold mb-6 text-xl">Company</h3>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-white font-fold mb-6 text-xl">Resources</h3>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                   Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                  Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                 Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-3">
                        <h3 className="text-white font-fold mb-6 text-xl">Social Links</h3>
                        <ul className="space-x-4 flex text-white">
                            <li>
                              <img className='bg-white'  src={instagram} alt="instagram" />
                            </li>
                            <li>
                               <img className='bg-white' src={facebook} alt="facebook" />
                            </li>
                            <li>
                               <img className='bg-white' src={xImg} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} © 2026 DigiTools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;