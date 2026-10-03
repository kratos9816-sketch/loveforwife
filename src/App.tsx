import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { StarfieldBackground } from './components/StarfieldBackground';
import { AudioPlayer } from './components/AudioPlayer';
import { PasswordGate } from './components/PasswordGate';
import { OpeningSection } from './components/sections/OpeningSection';
import { WonderSection } from './components/sections/WonderSection';
import { LoveAllSection } from './components/sections/LoveAllSection';
import { UniverseGalaxySection } from './components/sections/UniverseGalaxySection';
import { MissMeEnvelopeSection } from './components/sections/MissMeEnvelopeSection';
import { PromisesSection } from './components/sections/PromisesSection';
import { PhotoMemoriesSection } from './components/sections/PhotoMemoriesSection';
import { ThroughMyEyesSection } from './components/sections/ThroughMyEyesSection';
import { NoEndingSection } from './components/sections/NoEndingSection';
import { FinalPortalModal } from './components/FinalPortalModal';

export const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem('pondati_unlocked') === 'true';
  });
  const [hasEntered, setHasEntered] = useState(false);
  const [autoStartAudio, setAutoStartAudio] = useState(false);
  const [isFinalModalOpen, setIsFinalModalOpen] = useState(false);

  const handleUnlockPassword = () => {
    localStorage.setItem('pondati_unlocked', 'true');
    setIsUnlocked(true);
  };

  const handleEnterUniverse = () => {
    setHasEntered(true);
    setAutoStartAudio(true);
  };

  return (
    <div className="relative min-h-screen bg-[#080205] text-[#fff0f3] overflow-x-hidden">
      {/* Password Lock Gate */}
      <AnimatePresence>
        {!isUnlocked && (
          <PasswordGate onUnlock={handleUnlockPassword} />
        )}
      </AnimatePresence>

      {/* Custom Romantic Cursor */}
      <CustomCursor />

      {/* Dynamic Starfield & Heart Particle Canvas */}
      <StarfieldBackground />

      {/* Floating Audio Player */}
      <AudioPlayer autoStartRequested={autoStartAudio} />

      {/* Opening Intro Curtain Screen (Shown after unlock) */}
      <AnimatePresence>
        {isUnlocked && !hasEntered && (
          <OpeningSection onEnter={handleEnterUniverse} />
        )}
      </AnimatePresence>

      {/* Main Experience Universe */}
      {isUnlocked && hasEntered && (
        <main className="relative z-10 w-full transition-opacity duration-1000">
          {/* Section 1 — "If You Ever Wonder" */}
          <WonderSection />

          {/* Section 2 — "I Love All of You" */}
          <LoveAllSection />

          {/* Section 3 — "Our Little Universe" Interactive Galaxy */}
          <UniverseGalaxySection />

          {/* Section 4 — "For The Days You Miss Me" */}
          <MissMeEnvelopeSection />

          {/* Section 5 — "Things I Promise" */}
          <PromisesSection />

          {/* Section 6 — Photo Memories */}
          <PhotoMemoriesSection />

          {/* Section 7 — "If I Could Give You One Thing" */}
          <ThroughMyEyesSection />

          {/* Final Section — "There Is No Ending" */}
          <NoEndingSection onOneLastThingClick={() => setIsFinalModalOpen(true)} />
        </main>
      )}

      {/* Final Interaction Portal Modal */}
      <FinalPortalModal
        isOpen={isFinalModalOpen}
        onClose={() => setIsFinalModalOpen(false)}
      />
    </div>
  );
};

export default App;
