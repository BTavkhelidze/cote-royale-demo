'use client';
import Perfume from '@/components/Perfume';
import React from 'react';
import { perfumeData } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

function OurFragrancesSection() {
  useGSAP(() => {
    const firstWord = new SplitText('.firstTextS4', {
      type: 'words',
    });
    const secondWord = new SplitText('.secondTextS4', {
      type: 'words',
    });

    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#ourFragrancesST',
        start: 'top 70%',
      },
    });

    textTl
      .from(firstWord.words, {
        y: 100,
        duration: 1,
        stagger: 0.3,
      })
      .from(
        secondWord.words,
        {
          y: 100,
          duration: 1,
          stagger: 0.3,
        },
        '-=0.5'
      );
  }, []);

  return (
    <section id='ourFragrancesST' className=' py-[96px]'>
      <div className='card1150 flex flex-col items-center'>
        <p className='uppercase mb-8 '>Our Fragrances</p>

        <div className='textFontStyle text-center uppercase mb-9 overflow-hidden'>
          <div className='overflow-hidden'>
            <p className='block mb-3 firstTextS4   '>An Essence</p>
          </div>

          <span className='block secondTextS4 '>for Every Man</span>
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
