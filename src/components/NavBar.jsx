import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';

function NavBar() {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    const handleMenuItemClick = () => {
        setNav(false); // Close the mobile navbar when a menu item is clicked
    }
    
    return (
        <div className='sticky top-0 z-20 flex items-center justify-between w-full font-bold text-white bg-green-500/80 min-h-12'>
            <ul className='hidden px-4 sm:flex '>
                <li>
                    <a href="#home" onClick={handleMenuItemClick}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={handleMenuItemClick}>About Us</a>
                </li>
                <li>
                    <a href="#services" onClick={handleMenuItemClick}>Services</a>
                </li>
                <li>
                    <a href="#works" onClick={handleMenuItemClick}>Our Works</a>
                </li>
                <li>
                    <a href="#contact" onClick={handleMenuItemClick}>Contact Us</a>
                </li>
            </ul>
            <div className='flex justify-between'>
                <FaFacebook className='mx-4 cursor-pointer'onClick={() => window.open('https://www.facebook.com','_blank')} />  
                <FaInstagram className='mx-4 cursor-pointer' onClick={() => window.open('https://www.instagram.com/the._.thunder._.bolt', '_blank')}/>
                <FaTwitter className='mx-4 cursor-pointer' onClick={() => window.open('https://www.twitter.com', '_blank')}/>
                <FaYoutube className='mx-4 cursor-pointer' cursor-pointeronClick={() => window.open('https://www.youtube.com', '_blank')}/>
            </div>
            <div className='z-30 sm:hidden'>
                {/* Use FaBars icon for opening the navigation */}
                {!nav ? (
                    <FaBars onClick={handleNav} size={20} className='mr-4 cursor-pointer'/>
                ) : (
                    // Use FaTimes icon for closing the navigation
                    <FaTimes onClick={handleNav} size={20} className='mr-4 cursor-pointer'/>
                )}
            </div>
            {/* Mobile navigation menu */}
            <div className={nav
                           ?'absolute top-0 left-0 flex flex-col w-full h-screen px-4 overflow-y-hidden text-white duration-300 ease-in py-7 bg-black/90 md:hidden z-30'
                           :'absolute top-0 h-screen left-[-100%]'}>
                <div className="z-50 flex justify-end mr-4">
                    {/* Close button using the FaTimes icon */}
                    <FaTimes onClick={handleNav} size={20} className='cursor-pointer'/>
                </div>
                <ul className='w-full h-full pt-12 text-center'>
                    <li className='py-8 text-2xl '>
                        <a href="#home" onClick={handleMenuItemClick}>Home</a>
                    </li>
                    <li className='py-8 text-2xl '>
                        <a href="#about" onClick={handleMenuItemClick}>About Us</a>
                    </li>
                    <li className='py-8 text-2xl '>
                        <a href="#services" onClick={handleMenuItemClick}>Services</a>
                    </li>
                    <li className='py-8 text-2xl '>
                        <a href="#works" onClick={handleMenuItemClick}>Our Works</a>
                    </li>
                    <li className='py-8 text-2xl'>
                        <a href="#contact" onClick={handleMenuItemClick}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
