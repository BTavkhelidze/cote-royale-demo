'use client';
import Image from 'next/image';
import React from 'react';
import { LogoSVG, ProfileSVG, SearchSVG, ShopSVG } from '../../public';
import { IoIosMenu } from 'react-icons/io';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function HeaderSection() {
  useGSAP(() => {
    gsap.to('.logo', {
      scale: 1,
    });
  }, []);

  return (
    <header>
      <div className='fixed z-10 top-0 left-0 flex justify-between px-[2%] md:px-[1%] w-full  bg-[#000000] py-2 items-center'>
        <div className='w-[42px] h-[42px] text-2xl text-white   flex items-center justify-center cursor-pointer bgHover'>
          <IoIosMenu />
        </div>
        <Image
          src={LogoSVG}
          alt='logo'
          className='object-contain w-[200px] h-[50px] cursor-pointer logo scale-[0.75]'
        />
        <div className=' '>
          <Image src={ShopSVG} alt='cart icon' className='cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
