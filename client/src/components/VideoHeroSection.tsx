import { useEffect, useRef, useState } from 'react';

interface VideoHeroSectionProps {
  isVisible: boolean;
}

const VideoHeroSection = ({ isVisible }: VideoHeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    if (!isVisible || !videoRef.current) return;

    const video = videoRef.current;

    const handlePlay = () => {
      // First play - keep video muted, start background music at 48 seconds
      if (!hasPlayedOnce) {
        video.muted = true;
        if (backgroundAudioRef.current) {
          backgroundAudioRef.current.currentTime = 48;
          backgroundAudioRef.current.play().catch(err => console.error('Failed to play background audio:', err));
        }
        setHasPlayedOnce(true);
      }
    };

    const handleEnded = () => {
      // When video ends (about to loop), keep video muted and background music continues
      if (backgroundAudioRef.current) {
        // Ensure background music is still playing
        if (backgroundAudioRef.current.paused) {
          backgroundAudioRef.current.play().catch(err => console.error('Failed to play background audio:', err));
        }
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    // Auto-play the video (muted)
    video.muted = true;
    video.play().catch(err => console.error('Failed to auto-play video:', err));

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isVisible, hasPlayedOnce]);

  if (!isVisible) return null;

  return (
    <>
      <section 
        className="video-hero-section relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden"
        data-testid="section-video-hero"
        style={{ margin: 0, padding: 0 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted
          data-testid="video-hero"
          style={{ transform: 'scale(1.15)' }}
        >
          <source 
            src="https://res.cloudinary.com/dnlreax2z/video/upload/v1764386063/hero-section_ncmany.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Background Music Audio */}
      <audio
        ref={backgroundAudioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        volume={0.3}
        style={{ display: 'none' }}
        data-testid="background-music-audio"
      >
        <source
          src="https://res.cloudinary.com/dnlreax2z/video/upload/v1764386043/Michael_Bubl%C3%A9_-_Feeling_Good_Official_4K_Remastered_Music_Video_o3bodm.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default VideoHeroSection;
