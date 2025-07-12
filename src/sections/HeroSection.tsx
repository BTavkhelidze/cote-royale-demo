import Image from 'next/image';
import React from 'react';
import { HeroImg } from '../../public';

function HeroSection() {
  return (
    <section className='relative  h-[110vh]  '>
      <div className='absolute w-full h-full -z-1 '>
        <Image src={HeroImg} alt='bg-hero' fill className='object-cover' />
      </div>
      <div className='bg-[#00000080] flex items-center justify-center w-full h-full'>
        <div className='card1150'>
          <div className='max-w-[576px] w-full flex flex-col gap-6 items-start'>
            <h2 className='xl:text-8xl md:text-6xl sm:text-5xl text-3xl font-bold text-white pb-3'>
              Effortless Elegance
            </h2>
            <p className='text-lg text-[#fff]'>
              An expression of quiet luxury, Côte Royale is designed for the man
              who commands attention without seeking it. A reflection of
              nature’s raw beauty.
            </p>
            <button className='px-13 py-4 border-white border-2 bg-transparent cursor-pointer hover:bg-[#7D7D7D] duration-400'>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
