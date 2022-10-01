import React from 'react';
import Logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <div className='max-w-[1120px] w-full mx-auto py-8 px-8 flex items-center justify-center md:justify-start'>
      <img src={Logo} alt='Logo' className='' />
    </div>
  );
};

export default Navbar;
