'use client';
import Image from 'next/image';
import React from 'react';
import { HeroImg } from '../../public';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { SplitText } from 'gsap/SplitText';
import Button from '@/components/Button';

gsap.registerPlugin(SplitText);

function HeroSection() {
  useGSAP(() => {
    const titleSL = new SplitText('.first-title', {
      type: 'words',
    });
    const tl = gsap.timeline();
    tl.to('.heroMain', {
      opacity: 1,
      duration: 1,
    }).to(
      '#bg-hero',
      {
        scale: 1,
        duration: 3,
      },
      '<'
    );

    const textTl = gsap.timeline();
    textTl
      .from(titleSL.words, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      })
      .from(
        '.paragraphHero',
        {
          y: 20,
          opacity: 0,
          duration: 1,
        },
        '-=0.3'
      )
      .from(
        '#btnHero',
        {
          yPercent: 20,
          opacity: 0,
          duration: 1,
        },
        '-=0.3'
      );
  }, []);
  return (
    <section className='relative  h-[110vh] heroMain overflow-hidden opacity-0'>
      <div className='absolute w-full h-full -z-2 '>
        <Image
          id='bg-hero'
          src={HeroImg}
          alt='bg-hero'
          fill
          className='object-cover scale-[1.5]'
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full -z-1 bg-[#00000080]'></div>
      <div className=' flex items-center justify-center w-full h-full'>
        <div className='card1150'>
          <div className='max-w-[576px] w-full flex flex-col gap-6 items-start'>
            <h2 className=' first-title overflow-hidden'>
              Effortless Elegance
            </h2>
            <div></div>
            <p className='text-lg text-[#fff] paragraphHero'>
              An expression of quiet luxury, Côte Royale is designed for the man
              who commands attention without seeking it. A reflection of
              nature’s raw beauty.
            </p>
            <Button id='btnHero' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
