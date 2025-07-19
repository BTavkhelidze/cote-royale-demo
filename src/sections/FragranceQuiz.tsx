'use client';
import Button from '@/components/Button';
import React from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

function FragranceQuiz() {
  useGSAP(() => {
    const firstteext = new SplitText('.firstTextQuiz', {
      type: 'words, lines',
    });
    const secondText = new SplitText('.secondTextQuiz', {
      type: 'words, lines',
    });
    const TextTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#FragrancesQuiz',
        start: 'top 60%',
      },
    });

    gsap.from('#scrollQuizdiv', {
      y: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#FragrancesQuiz',
        start: 'top 70%',
      },
    });

    TextTl.from(firstteext.words, {
      duration: 1,
      y: 100,
      stagger: 0.2,
      ease: 'power1.in',
    }).from(secondText.words, {
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: 'power1.inOut',
    });
  });
  return (
    <section id='FragrancesQuiz' className='relative py-[116px]  '>
      <div className='card1150 flex flex-col items-center' id='scrollQuizdiv'>
        <p className='uppercase mb-8 '>Fragrance Quiz</p>

        <div className='textFontStyle text-center uppercase mb-9 overflow-hidden'>
          <div className='overflow-hidden'>
            <p className='block mb-3 firstTextQuiz   '>The Cote Royale </p>
          </div>

          <span className='block secondTextQuiz '>Fragrance Finder</span>
        </div>

        <p className='text-center'>
          Find your perfect scent with our personalized quiz.
        </p>
        <Button className='bg-white text-black duration-500 mt-8 hover:border-[#7D7D7D]' />
      </div>{' '}
    </section>
  );
}

export default FragranceQuiz;
