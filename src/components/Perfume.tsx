import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { IPerfume } from '../../constants';

interface PerfumeI {
  perfume: IPerfume;
}

const Perfume: React.FC<PerfumeI> = ({ perfume }) => {
  return (
    <div className='relative w-full  overflow-hidden '>
      <div className=' absolute w-full h-full bg-amber-200 -z-2 top-0 left-0'>
        <Image
          src={`/images/${perfume.id}-ad.png`}
          alt='terra-ad image'
          fill
          className='object-cover object-right'
        />
      </div>
      <div className='sm:hidden absolute w-full h-full top-0 left-0 bg-[#00000060] -z-1'></div>
      <div className='max-w-md w-full  flex flex-col gap-2'>
        <h2 className='textFontStyle'>{perfume.name}</h2>
        <span>{perfume.brand}</span>
        <p className='md:text-lg text-base text-gray-300 mt-6 md:mt-8'>
          {perfume.description}
        </p>
        <div className='mt-6 md:mt-8 '>
          <span className='font-semibold uppercase'>Features</span>
          <div className='flex gap-2 mt-3'>
            <Image
              src={perfume.feat1Icon}
              alt='notification icon'
              className='w-6 h-6'
            />
            <span>{perfume.feature1}</span>
          </div>
          <div className='flex gap-2 mt-3'>
            <Image
              src={perfume.feat2Icon}
              alt='notification icon'
              className='w-6 h-6'
            />
            <span>{perfume.feature2}</span>
          </div>
        </div>
        <div className='flex gap-4 mt-10'>
          <Button text='discover' id='discover' />
          <Button
            text='+ ADD TO BAG'
            id='discover'
            className='bg-white hidden sm:flex text-black hover:border-[#7D7D7D]'
          />
        </div>
      </div>
    </div>
  );
};

export default Perfume;
