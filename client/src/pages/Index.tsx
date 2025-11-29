import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VideoHeroSection from '@/components/VideoHeroSection';
// Cover images
const cover1Image = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386101/cover1_ufh7xx.jpg';
const cover2Image = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386102/cover2_cajk92.jpg';
const cover3Image = 'https://res.cloudinary.com/dnlreax2z/image/upload/v1764386102/cover3_qtktd4.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import GiftSection from '@/components/GiftSection';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showVideoHero, setShowVideoHero] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;
    }
  }, []);

  // Lock/unlock scroll based on whether invitation is open
  useEffect(() => {
    if (!showVideoHero) {
      // Lock scroll when hero is showing (invitation popup)
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
      document.body.style.height = '100vh';
    } else {
      // Unlock scroll when invitation is opened
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.style.height = 'auto';
    }

    return () => {
      // Cleanup on unmount
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.style.height = 'auto';
    };
  }, [showVideoHero]);

  const handleOpenInvitation = () => {
    // Show video immediately after invitation is closed
    setShowVideoHero(true);
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/dvmsnobt5/video/upload/v1762268612/ytmp3free.cc_its-you-youtubemp3free.org_ahufzy.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className={`relative ${!showVideoHero ? 'w-screen h-screen overflow-hidden' : 'min-h-screen'}`}>
        <Navigation />

        <main className={`relative z-10 space-y-0 ${!showVideoHero ? 'w-screen h-screen overflow-hidden' : ''}`}>
          {!showVideoHero ? (
            <HeroSection audioRef={audioRef} onOpenInvitation={handleOpenInvitation} />
          ) : (
            <VideoHeroSection isVisible={showVideoHero} />
          )}
          <InvitationRevealSection />
          <CountdownSection />
          <StorySection />
          <CoverSection
            imageUrl={cover1Image}
            alt="Jeremy & Carmela Wedding Cover 1"
          />
          <ScrollTriggeredTimeline />
          <VenueSection />
          <CoverSection
            imageUrl={cover2Image}
            alt="Jeremy & Carmela Wedding Cover 2"
          />
          <DressCodeSection />
          <HashtagGiftsSection />
          <GiftSection />
          <MemorableMomentsSection />
          <RSVPSection />
          <EntourageSection />
          <CoverSection
            imageUrl={cover3Image}
            alt="Jeremy & Carmela Wedding Cover 3"
          />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;
