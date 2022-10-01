import React from 'react';
import heroLeft from '../assets/illustration-hero-left.svg';
import heroRight from '../assets/illustration-hero-right.svg';
import heroSquiggle from '../assets/bg-hero-squiggle.svg';
import scrollIcon from '../assets/icon-scroll.svg';

const Headerdesktop = () => {
  return (
    <div className='w-full'>
      <div className='hidden md:grid grid-cols-4'>
        <img src={heroLeft} alt='Mobile Hero' className='hidden md:block' />
        <img src={heroSquiggle} alt='Mobile Hero' className='hidden md:block col-span-2 mx-auto' />
        <img src={heroRight} alt='Mobile Hero' className='hidden md:block' />
      </div>
      <div className='hidden md:flex flex-col items-center justify-center py-8 px-4 md:mt-[-350px]'>
        <h1 className='text-[40px] lg:text-[48px] text-center text-white font-bold max-w-md lg:max-w-lg'>
          Get paid for the work you <span className='text-tealColor'>love</span> to do.
        </h1>
        <p className='text-grayColor font-semibold text-center text-[15px] my-8 md:max-w-lg'>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
        <img src={scrollIcon} alt='Scroll Icon' />
      </div>
    </div>
  );
};

export default Headerdesktop;
