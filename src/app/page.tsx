import DefiningLuxury from '@/sections/DefiningLuxury';
import HeroSection from '@/sections/HeroSection';
import OurFragrancesSection from '@/sections/OurFragrancesSection';
import PowerfulSimplisitySection from '@/sections/PowerfulSimplisitySection';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      {' '}
      <HeroSection />
      <DefiningLuxury />
      <PowerfulSimplisitySection />
      <OurFragrancesSection />
      <div className='w-full h-screen'></div>
    </main>
  );
}
