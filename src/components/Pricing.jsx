import React from 'react';
import Free from '../assets/icon-free.svg';
import Paid from '../assets/icon-paid.svg';
import { AiOutlineCheck } from 'react-icons/ai';
const Pricing = () => {
  return (
    <div className='max-w-[1120px] w-full mx-auto py-16 px-10'>
      {/*Content*/}
      <div className='flex flex-col items-center justify-center space-y-5 mb-20'>
        <h2 className='text-whiteColor text-[25px] font-extrabold'>Our pricing plans</h2>
        <p className='max-w-md text-grayColor text-[15px] leading-7 text-center'>We only make money when our creators make money. Our plans are always affordable, and it's completely free to get started.</p>
      </div>
      {/*Price Cards*/}
      <div className='grid md:justify-items-center lg:grid-cols-2 space-y-20 lg:space-y-0 lg:gap-8'>
        {/*Price Card*/}
        <div className='bg-blueColor rounded-xl px-6 py-8 space-y-5 md:w-[450px]'>
          <img src={Free} alt='Free' className='mt-[-60px]' />
          <h3 className='text-whiteColor font-extrabold text-[18px]'>Dip your toe</h3>
          <p className='text-whiteColor font-medium'>Just getting started? no problem at all! Our free plan will take you a long way.</p>
          <p className='text-whiteColor text-[40px] font-extrabold'>Free</p>
          <ul className='space-y-4'>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#3EE9E5' />
              <p className='text-whiteColor'>Unlimited products</p>
            </li>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#3EE9E5' />
              <p className='text-whiteColor'>Basic analytics</p>
            </li>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#3EE9E5' />
              <p className='text-whiteColor'>Limited marketplace exposure</p>
            </li>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#3EE9E5' />
              <p className='text-whiteColor'>10% fee per transaction</p>
            </li>
          </ul>
        </div>
        {/*Price Card*/}
        <div className='bg-tealColor rounded-xl px-6 py-8 space-y-5 md:w-[450px] lg:scale-105'>
          <img src={Paid} alt='Paid' className='mt-[-60px]' />
          <h3 className='text-darkColor font-extrabold text-[18px]'>Dive right in</h3>
          <p className='text-darkColor font-medium'>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
          <p className='text-darkColor text-[40px] font-extrabold'>
            $25.00 <small className='text-[#080C20] text-[15px] font-thin'>/month</small>
          </p>
          <ul className='space-y-4'>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#093F68' />
              <p className='text-[#080C20]'>Costum domain</p>
            </li>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#093F68' />
              <p className='text-[#080C20]'>Advanced analytics and reports</p>
            </li>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#093F68' />
              <p className='text-[#080C20]'>High marketplace visibilty</p>
            </li>
            <li className='flex items-center space-x-4'>
              <AiOutlineCheck color='#093F68' />
              <p className='text-[#080C20]'>5% fee per transaction</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
