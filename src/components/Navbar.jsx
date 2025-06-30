import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
      const location = useLocation();
 const isActive = (path) => location.pathname === path;
    return (
        <nav className="bg-amber-700 text-white shadow-md  sticky top-0 z-10 pr-5 pl-5">
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between items-center ">
                {/* Logo Section */}
                <div className="mb-4 md:mb-0">
                    <Link
                        to="/"
                        className="text-lg font-bold bg-lime-50 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
                    >
                        Flavory
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center text-slate-950">
                    <Link
                        to="/"
                        className={`hover:text-yellow-300 transition ${isActive('/') ? 'font-bold text-yellow-500' : ''}`}
                    >
                        Home
                    </Link>


                    <Link
                        to="/allFoods"
                        className={`hover:text-yellow-300 transition ${isActive('/allSportsEquipment') ? 'font-bold text-yellow-500' : ''}`}
                    >
                        All Foods
                    </Link>
                    <Link
                        to="/gallery"
                        className={`hover:text-yellow-300 transition ${isActive('/allSportsEquipment') ? 'font-bold text-yellow-500' : ''}`}
                    >
                        Gallary
                    </Link>


                </div>
                {/* User Section */}
                <div className="mt-4 md:mt-0 flex items-center space-x-4 relative">                  
                    
                        <div className="flex space-x-4">
                            <Link
                                to="/signin"
                                className={`text-black hover:text-slate-50 transition ${isActive('/signin') ? 'font-bold text-yellow-500' : ''}`}
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/register"
                                className={`text-black hover:text-slate-50 transition ${isActive('/register') ? 'font-bold text-yellow-500' : ''}`}
                            >
                                Register
                            </Link>
                        </div>  
                </div>
            </div>
        </nav>
    );

};

export default Navbar;


