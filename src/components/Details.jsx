import React from 'react';
import Passions from '../assets/illustration-passions.svg';
import Financial from '../assets/illustration-financial-freedom.svg';
import Lifestyle from '../assets/illustration-lifestyle.svg';
import WFA from '../assets/illustration-work-anywhere.svg';

const Details = () => {
  return (
    <div className='max-w-[1120px] w-full mx-auto grid content-center justify-items-center my-16 space-y-10 lg:space-y-0 lg:grid-cols-4'>
      {/*Grid Item*/}
      <div className='flex flex-col w-full items-center justify-center space-y-5 md:space-y-0 md:space-x-10 md:flex-row lg:flex-col md:ml-10 lg:ml-0'>
        <div className='bg-blueColor p-4 w-[125px] h-[125px] flex items-center justify-center rounded-[50px] lg:mb-8'>
          <img src={Passions} alt='Passions' className='w-[70px]' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 md:items-start'>
          <h2 className='text-whiteColor text-[18px] font-extrabold'>Induldge your passions</h2>
          <p className='text-center md:text-left text-grayColor text-[15px] font-medium max-w-sm'>
            Your passions shouldn't be just for the weekend.<br></br>Earn a living doing what you love.
          </p>
        </div>
      </div>
      {/*Grid Item*/}
      <div className='flex flex-col md:flex-row lg:flex-col w-full items-center justify-center space-y-5 md:space-y-0 md:space-x-10 lg:pt-20'>
        <div className='bg-blueColor p-4 w-[125px] h-[125px] flex items-center justify-center rounded-[50px] lg:mb-8'>
          <img src={Financial} alt='Financial Freedom' className='w-[70px]' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 md:items-start'>
          <h2 className='text-whiteColor text-[18px] font-extrabold'>Gain financial freedom</h2>
          <p className='text-center md:text-left text-grayColor text-[15px] font-medium max-w-sm'>Start making money work for you. There's nothing quite like earning while you sleep.</p>
        </div>
      </div>
      {/*Grid Item*/}
      <div className='flex flex-col md:flex-row lg:flex-col w-full items-center justify-center space-y-5 md:space-y-0 md:space-x-10 md:ml-20 lg:ml-0'>
        <div className='bg-blueColor p-4 w-[125px] h-[125px] flex items-center justify-center rounded-[50px] lg:mb-8'>
          <img src={Lifestyle} alt='Lifestyle' className='w-[70px]' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 md:items-start'>
          <h2 className='text-whiteColor text-[18px] font-extrabold'>Choose your lifestyle</h2>
          <p className='text-center md:text-left text-grayColor text-[15px] font-medium max-w-sm'>Own your daily schedule. Fancy a lie-in? Go for it! take charge of your week.</p>
        </div>
      </div>
      {/*Grid Item*/}
      <div className='flex flex-col md:flex-row lg:flex-col w-full items-center justify-center space-y-5 md:space-y-0 md:space-x-10 lg:pt-20'>
        <div className='bg-blueColor p-4 w-[125px] h-[125px] flex items-center justify-center rounded-[50px] lg:mb-8'>
          <img src={WFA} alt='Work From Anywhere' className='w-[70px]' />
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 md:items-start'>
          <h2 className='text-whiteColor text-[18px] font-extrabold'>Work from anywhere</h2>
          <p className='text-center md:text-left text-grayColor text-[15px] font-medium max-w-sm'>Selling online means not being pinned down. Want to work AND travel? Go for it!</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
