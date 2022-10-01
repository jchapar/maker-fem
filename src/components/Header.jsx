import React from 'react';
import heroMobile from '../assets/illustration-hero-mobile.png';
import scrollIcon from '../assets/icon-scroll.svg';

const Header = () => {
  return (
    <div className='max-w-[1120px] w-full mx-auto py-8 '>
      <img src={heroMobile} alt='Mobile Hero' className='md:hidden' />
      <div className='flex flex-col items-center justify-center py-8 px-4 md:hidden'>
        <h1 className='text-[40px] text-center text-white font-bold max-w-md'>
          Get paid for the work you <span className='text-tealColor'>love</span> to do.
        </h1>
        <p className='text-grayColor font-semibold text-center text-[15px] my-8'>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
        <img src={scrollIcon} alt='Scroll Icon' />
      </div>
    </div>
  );
};

export default Header;
