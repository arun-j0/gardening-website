import React from 'react';
import { RiPlantLine } from 'react-icons/ri';
import { FaClock, FaPhoneSquareAlt } from 'react-icons/fa';

const TopBar = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = '+919488265355'; // Your WhatsApp number
    const message = 'I would like to get a free quote.'; // Message to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div className='flex items-center justify-between px-4 py-2' id='home'>
      <div className='flex items-center'>
        <RiPlantLine size='40' className='text-green-500' />
        <h1 className='text-xs font-bold text-green-500 sm:text-sm md:text-xl'>GO GREEN GARDENING</h1>
      </div>
      <div className='flex'>
        <div className='items-center hidden px-6 md:flex'>
          <FaClock size='25' className='mr-2 text-green-500' />
          <h1 className='font-bold text-gray-700'>9AM - 6PM</h1>
        </div>
        <div className='items-center hidden px-6 md:flex'>
          <FaPhoneSquareAlt size='25' className='mr-2 text-green-500' />
          <h1 className='font-bold text-gray-700'>+91 9488265355</h1>
        </div>
        <button onClick={handleWhatsAppRedirect}><span className='font-bold'>Get a Free Quote</span></button>
      </div>
    </div>
  );
};

export default TopBar;
