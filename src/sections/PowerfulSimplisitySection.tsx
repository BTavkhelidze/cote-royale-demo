'use client';
import Image from 'next/image';
import React from 'react';
import { FlexImgS3, IgnisiBottle } from '../../public';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function PowerfulSimplisitySection() {
  useGSAP(() => {
    const fisrtDivTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#powerful-simplisity-section',
        start: 'top 80%',
      },
    });
    fisrtDivTL
      .from('.FirstS3Div', {
        y: 50,
        opacity: 0,
        duration: 1.6,
        ease: 'power2.inOut',
      })
      .from(
        '.FirstS3Div h5',
        {
          duration: 1.6,
          opacity: 0,
          ease: 'power1.in',
        },
        '<'
      )
      .from(
        '.FirstS3Div p',
        {
          opacity: 0,

          ease: 'power1.inOut',
        },
        '-= 0.3'
      );

    gsap.from('#imageS3Div', {
      y: 20,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#powerful-simplisity-section',
        start: 'top 60%',
      },
    });
    gsap.from('#secondDivS3', {
      y: 20,
      opacity: 0,
      duration: 1.4,
      delay: 0.2,
      ease: 'back.inOut',
      scrollTrigger: {
        trigger: '#powerful-simplisity-section',
        start: 'top 42%',
        markers: true,
      },
    });
  }, []);
  return (
    <section
      className='w-full  lg:min-h-[870px]  '
      id='powerful-simplisity-section'
    >
      <div className='card1150 flex flex-col lg:flex-row gap-6 h-full lg:h-[870px] pt-16 '>
        <div className='flex-5' id='imageS3Div'>
          <Image
            id='imgS3'
            src={FlexImgS3}
            alt='bg-hero'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='flex-3  flex flex-col  h-full gap-6 sm:gap-10 md:gap-20 overflow-hidden'>
          <div className='p-10 flex-1 bg-[#1A1A1A] flex flex-col gap-8 FirstS3Div'>
            <h5 className='text-2xl md:text-4xl'>Powerful Simplicity</h5>
            <p className='text-base text-gray-300'>
              An expression of quiet luxury, Côte Royale is designed for the man
              who commands attention without seeking it. A reflection of
              nature’s raw beauty, redefined for today.
            </p>
          </div>
          <div
            className='relative flex-2 min-h-[400px]  sm:min-h-[700px] lg:min-h-[0] h-full   lg:h-full justify-end left-0 p-10 bg-[#1A1A1A] flex flex-col gap-8 '
            id='secondDivS3'
          >
            <Image
              src={IgnisiBottle}
              alt='Ignisi perfume'
              className='absolute sm:-top-10 md:right-5 -right-20 md:-top-30 h-full  object-contain -rotate-16'
            />
            <div className='flex'>
              <div className='flex flex-col'>
                <h4 className='text-4xl mb-2'>Ignis</h4>
                <p className='text-base mt-2 mb-4'>Eau de Parfum</p>
                <span className='mb-4   md:hidden'>$110</span>
                <Button id='btnS3' />
              </div>

              <span className=' text-end flex-1 hidden  md:inline-block'>
                $110
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerfulSimplisitySection;
