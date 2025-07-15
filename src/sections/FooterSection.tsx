import Image from 'next/image';
import React from 'react';
import { LogoSVG } from '../../public';

function FooterSection() {
  return (
    <footer>
      <div className=' w-full  px-[2%] flex flex-col py-8 mt-12'>
        <div className='flex mt-10 flex-1/2  lg:w-[55%] justify-between items-center'>
          <p className='text-xs sm:text-sm'>
            &copy; 2025 Côte Royale Inc. All rights reserved
          </p>
          <Image
            src={LogoSVG}
            alt='logo'
            className='object-contain w-[100px] md:w-[200px] h-[50px] cursor-pointer logo scale-[0.75]'
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
