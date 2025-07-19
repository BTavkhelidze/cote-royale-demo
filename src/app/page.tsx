import DefiningLuxury from '@/sections/DefiningLuxury';
import FragranceQuiz from '@/sections/FragranceQuiz';
import HeroSection from '@/sections/HeroSection';
import OurFragrancesSection from '@/sections/OurFragrancesSection';
import PowerfulSimplisitySection from '@/sections/PowerfulSimplisitySection';
import VideoSection from '@/sections/VideoSection';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      {' '}
      <HeroSection />
      <DefiningLuxury />
      <PowerfulSimplisitySection />
      <OurFragrancesSection />
      <FragranceQuiz />
      <VideoSection />
    </main>
  );
}
