import React from 'react';
import { EventCard } from './components/EventCard';
import { SnowEffect } from './components/SnowEffect';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-0 sm:py-12 px-0 sm:px-4 overflow-x-hidden relative">
      {/* Visual Effects */}
      <SnowEffect />
      <MusicPlayer />

      {/* 
        The main card component that replicates the user's design.
        It handles all visual presentation of the event data.
      */}
      <div className="z-10 w-full flex justify-center">
        <EventCard />
      </div>
    </div>
  );
}

export default App;