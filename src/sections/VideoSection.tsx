import React from 'react';

function VideoSection() {
  return (
    <section className='w-full h-screen'>
      <iframe
        src={
          'https://www.youtube-nocookie.com/embed/eTEsWseiDdg?autoplay=1&mute=1&loop=1&playlist=eTEsWseiDdg'
        }
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        className='w-full h-full pointer-events-none '
      />
    </section>
  );
}

export default VideoSection;
