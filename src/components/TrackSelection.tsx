
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Star, 
  Trophy
} from "lucide-react";

const trackData = [
  {
    id: 1,
    name: "Neon City Circuit",
    location: "Tokyo, Japan",
    length: "5.2 km",
    difficulty: "Hard",
    bestTime: "1:32.456",
    featured: true,
  },
  {
    id: 2,
    name: "Sunset Coastal Run",
    location: "Miami, USA",
    length: "7.8 km",
    difficulty: "Medium",
    bestTime: "2:45.302",
    featured: false,
  },
  {
    id: 3,
    name: "Alpine Rally",
    location: "Alps, Switzerland",
    length: "10.5 km",
    difficulty: "Expert",
    bestTime: "3:28.901",
    featured: false,
  },
];

const TrackSelection = () => {
  const [selectedTrackId, setSelectedTrackId] = useState(1);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-racing-accent';
      case 'hard': return 'text-orange-400';
      case 'expert': return 'text-racing-red';
      default: return 'text-white';
    }
  };

  return (
    <section id="tracks" className="py-16 lg:py-24 relative bg-racing-carbon/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-track-grid bg-[length:40px_40px] opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-racing text-3xl md:text-4xl text-white mb-3">MASTER THE <span className="text-racing-red">TRACKS</span></h2>
          <p className="text-white/70 text-center max-w-xl">
            Race through diverse environments with unique challenges and breathtaking scenery
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trackData.map((track) => (
            <div 
              key={track.id}
              className={`racing-card transition-transform hover:-translate-y-1 cursor-pointer ${
                selectedTrackId === track.id ? 'ring-2 ring-racing-accent' : ''
              }`}
              onClick={() => setSelectedTrackId(track.id)}
            >
              {/* Track image (placeholder) */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-racing-blue/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg text-white/30">{track.name}</span>
                </div>
                
                {/* Featured badge */}
                {track.featured && (
                  <Badge className="absolute top-3 left-3 bg-racing-red text-white">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Track info */}
              <div className="p-4">
                <h3 className="font-racing text-xl text-white mb-2">{track.name}</h3>
                
                <div className="flex items-center gap-2 text-white/70 mb-1">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">{track.location}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/50">LENGTH</span>
                    <span className="text-sm text-white">{track.length}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/50">DIFFICULTY</span>
                    <span className={`text-sm ${getDifficultyColor(track.difficulty)}`}>
                      {track.difficulty}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/50">BEST TIME</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-racing-accent" />
                      <span className="text-sm text-white">{track.bestTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-racing-accent" />
                    <Star className="h-4 w-4 text-racing-accent" />
                    <Star className="h-4 w-4 text-racing-accent" />
                    <Star className="h-4 w-4 text-racing-accent" />
                    <Star className="h-4 w-4 text-white/30" />
                  </div>
                  
                  <Button 
                    size="sm" 
                    className={`${
                      selectedTrackId === track.id 
                        ? 'bg-racing-accent hover:bg-racing-accent/90 text-racing-carbon' 
                        : 'bg-racing-carbon hover:bg-racing-carbon/90 text-white'
                    }`}
                  >
                    {selectedTrackId === track.id ? 'SELECTED' : 'SELECT'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Track details */}
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="bg-racing-red hover:bg-racing-red/90 text-white">
            RACE NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrackSelection;
