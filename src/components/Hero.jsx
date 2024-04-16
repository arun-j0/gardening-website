import React from 'react';
import heroImage from '../assets/hero/hero.jpg';

function Hero() {
  return (
    <div className='z-0 w-full h-[90vh] relative border-4 border-white'>
      <img
        src={heroImage}
        alt="Go Green Gardening"
        className='object-cover object-top w-full h-full rounded-xl'
      />
      <div className='max-w-[1140px] mx-auto'>
        <div className='absolute top-[50%] w-full md:-[50%] left-[1%] max-w-[600px] h-full flex flex-col text-white p-4 '>
          <h1 className='mb-2 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl md:mb-4'>
            Transform Your Space
          </h1>
          <h2 className='mb-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl md:mb-6'>
            With Sustainable{' '}
            <span className='text-green-500'>Gardening</span>
          </h2>
          <p className='text-sm font-medium md:text-base lg:text-lg'>
            Experience the beauty of nature while preserving it for generations
            to come. Our eco-friendly gardening solutions not only enhance the
            aesthetics of your space but also contribute to a healthier
            environment. Let us help you create a lush oasis where
            sustainability meets serenity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
