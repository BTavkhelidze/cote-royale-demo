import Image from 'next/image';
import React from 'react';
import { LogoSVG, ProfileSVG, SearchSVG, ShopSVG } from '../../public';
import { IoIosMenu } from 'react-icons/io';

function HeaderSection() {
  return (
    <header>
      <div className='flex justify-between px-[1%]  bg-[#000000] py-6 items-center'>
        <div className='w-[42px] h-[42px] text-2xl text-white   flex items-center justify-center cursor-pointer hover:bg-[#333333] duration-450'>
          <IoIosMenu />
        </div>
        <Image
          src={LogoSVG}
          alt='logo'
          className='object-contain w-[200px] h-[50px] cursor-pointer'
        />
        <div className='flex gap-6 '>
          <Image src={SearchSVG} alt='search icon' className='cursor-pointer' />
          <Image
            src={ProfileSVG}
            alt='go to Profile icon'
            className='cursor-pointer'
          />
          <Image src={ShopSVG} alt='cart icon' className='cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
