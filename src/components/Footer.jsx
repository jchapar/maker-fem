import React from 'react';
import FooterBG from '../assets/bg-footer-squiggle.svg';

const Footer = () => {
  return (
    <div className='py-16'>
      <img src={FooterBG} alt='Footer Background' className='mx-auto' />
      <div className='max-w-[1120px] mx-auto flex flex-col items-center justify-center space-y-5 md:space-y-0 mt-[-50px] md:mt-[-100px]'>
        <h2 className='text-whiteColor text-[24px] font-extrabold max-w-xs md:max-w-md text-center md:mb-5'>Get notified when we launch</h2>
        <div className='flex w-full flex-col px-10 md:flex-row items-start justify-center md:space-x-5'>
          <div className='flex flex-col items-start mb-3 w-full md:space-y-3 md:mb-0 md:max-w-[350px]'>
            <input type='email' placeholder='Email address' className='bg-blueColor text-grayColor py-3 px-4 w-full rounded-full text-[15px] font-extrabold focus:outline-none md:max-w-[350px]' />
            <small className='text-pinkColor text-[12px] md:pl-5 opacity-0'>Opps! That doesn't look like an email address</small>
          </div>
          <button className='bg-tealColor text-blueColor py-3 px-4 w-full rounded-full text-[15px] font-extrabold h-[50px] md:max-w-[150px] hover:bg-transparent hover:border hover:border-[tealColor] hover:text-whiteColor hover:ease-in duration-150'>Get notified</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
