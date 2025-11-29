import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  onOpenInvitation?: () => void;
}

const HeroSection = ({ audioRef, onOpenInvitation }: HeroSectionProps) => {
  const [showElements, setShowElements] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  const handleOpenInvitation = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onOpenInvitation?.();
    }, 50);
  };

  return (
    <>
      <section 
        className={`hero-section relative flex flex-col items-center justify-center overflow-hidden transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, left: 0, top: 0 }}
      >
        {/* Background Image - Prenup */}
        <img
          src="https://res.cloudinary.com/dnlreax2z/image/upload/v1764386113/prenup11_c3vupt.jpg"
          alt="Hero background - Prenup"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ margin: 0, padding: 0 }}
          data-testid="hero-image"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Content - Centered Names */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          {/* Tagline */}
          <div className={`transition-all duration-700 mb-4 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
            <p className="text-sm sm:text-base md:text-lg text-white font-light tracking-[0.3em] uppercase" data-testid="text-tagline" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>
              WHERE DISTANCE ENDS AND FOREVER STARTS
            </p>
          </div>
          
          {/* Names */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-wide" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'MICHAEL & SHAIRA',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                MICHAEL & SHAIRA
              </span>
            )}
          </h1>

          {/* Date */}
          <div className={`transition-all duration-700 mt-6 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
            <p className="text-sm sm:text-base md:text-lg text-white font-light tracking-[0.3em] uppercase" data-testid="text-date" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 300 }}>Saturday, February 21, 2026 </p>
          </div>

          {/* Open Invitation Button */}
          <div className={`transition-all duration-700 mt-8 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
            <button 
              onClick={handleOpenInvitation}
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm text-white text-sm md:text-base font-display tracking-wider hover:bg-white/20 transition-all duration-300 border-2 border-white uppercase"
              data-testid="button-hero-open-invitation"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
            >
              Open Invitation
            </button>
          </div>
        </div>
        {/* Styles */}
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
          }
          
          .hero-section {
            width: 100vw;
            height: 100vh;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Custom underscore cursor for TypeAnimation */
          .typewriter-text .react-type-animation-cursor {
            color: #111827;
            animation: blink 1.2s infinite;
          }

          .typewriter-text .react-type-animation-cursor::after {
            content: '_';
            font-weight: bold;
          }

          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;
