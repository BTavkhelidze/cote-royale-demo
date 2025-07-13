import DefiningLuxury from '@/sections/DefiningLuxury';
import HeroSection from '@/sections/HeroSection';
import PowerfulSimplisitySection from '@/sections/PowerfulSimplisitySection';

export default function Home() {
  return (
    <main>
      {' '}
      <HeroSection />
      <DefiningLuxury />
      <PowerfulSimplisitySection />
      <div className='w-full h-screen'></div>
    </main>
  );
}
