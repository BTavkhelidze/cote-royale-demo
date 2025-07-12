'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { title } from 'process';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

function DefiningLuxury() {
  useGSAP(() => {
    const paragraphSL = new SplitText('#DParagraph', {
      type: 'chars, words, lines',
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#definingSection',
        start: 'top center',
        end: 'top 20%',
        scrub: 1.5,
      },
    });

    tl.to('#blurDiv', {
      backdropFilter: 'blur(0px)',
      ease: 'none',
    });

    const titleTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#definingSection',
        start: 'top top',
        // end: '200% bottom',
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    titleTL.to(paragraphSL.chars, {
      color: 'white',
      stagger: 0.2,
      duration: 1,
    });
  });
  return (
    <section className='relative h-screen ' id='definingSection'>
      <div
        className='absolute top-0 left-0 w-full h-full z-1 backdrop-blur-xl '
        id='blurDiv'
      ></div>
      <div className='card1150 h-full flex items-center justify-center flex-col gap-10'>
        <p>Defining Luxury</p>
        <div>
          <p
            className='text-3xl  sm:text-5xl md:text-7xl text-center text-balance leading-tight text-[#2e3138]'
            id='DParagraph'
          >
            Côte Royale is designed for the man who commands attention without
            seeking it
          </p>
        </div>
      </div>
    </section>
  );
}

export default DefiningLuxury;
