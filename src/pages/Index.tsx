
import React from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CarSelection from '@/components/CarSelection';
import TrackSelection from '@/components/TrackSelection';
import Leaderboard from '@/components/Leaderboard';
import GameUI from '@/components/GameUI';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CarSelection />
        <TrackSelection />
        <GameUI />
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
