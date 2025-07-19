'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

function VideoSection() {
  useGSAP(() => {
    gsap.from('#videoSection', {
      duration: 1.5,
      yPercent: 30,
      opacity: 0,
      scrollTrigger: {
        trigger: '#videoSection',
        start: 'top 60%',
      },
    });
  }, []);

  return (
    <section className='w-full h-screen' id='videoSection'>
      <iframe
        src={
          'https://www.youtube-nocookie.com/embed/eTEsWseiDdg?autoplay=1&mute=1&loop=1&playlist=eTEsWseiDdg '
        }
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        className='w-full h-full pointer-events-none '
      />
    </section>
  );
}

export default VideoSection;
