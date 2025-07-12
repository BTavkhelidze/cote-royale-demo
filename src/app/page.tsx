import DefiningLuxury from '@/sections/DefiningLuxury';
import HeroSection from '@/sections/HeroSection';

export default function Home() {
  return (
    <main>
      {' '}
      <HeroSection />
      <DefiningLuxury />
      <div className='w-full h-screen'></div>
    </main>
  );
}
