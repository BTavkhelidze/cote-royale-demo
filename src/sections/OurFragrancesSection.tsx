import Perfume from '@/components/Perfume';
import React from 'react';
import { perfumeData } from '../../constants';

function OurFragrancesSection() {
  return (
    <section id='ourFragrancesST' className=' py-[96px]'>
      <div className='card1150 flex flex-col items-center'>
        <p className='uppercase mb-8 '>Our Fragrances</p>

        <div className='textFontStyle text-center uppercase mb-9'>
          <span className='block mb-3'>An Essence </span>
          <span className='block'>for Every Man</span>
        </div>

        <p className='text-center'>
          An expression of quiet luxury, Côte Royale is designed for the man who
          commands attention without seeking it.
        </p>
        <div className='mt-16 w-full flex flex-col gap-12'>
          {perfumeData.map((perfume) => (
            <Perfume key={perfume.name} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurFragrancesSection;
