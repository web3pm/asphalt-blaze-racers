
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Flame, Gauge, Timer } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-racing-blue">
        <div className="absolute inset-0 bg-gradient-to-t from-racing-blue via-racing-blue/70 to-transparent" />
        
        {/* Speed lines effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1px] bg-white/80 animate-speed-lines"
              style={{ 
                width: `${Math.random() * 200 + 100}px`, 
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 1}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-racing-red/20 px-3 py-1 text-sm text-racing-red">
                <Flame className="mr-1 h-3 w-3" />
                New Season
              </span>
            </div>
            
            <h1 className="font-racing text-4xl md:text-6xl text-white leading-tight">
              FEEL THE <span className="text-racing-red">SPEED</span>.<br />
              CLAIM THE <span className="text-racing-accent">GLORY</span>.
            </h1>
            
            <p className="text-lg text-white/80">
              Experience the ultimate racing simulation with realistic physics, stunning graphics, and heart-pounding competition. Choose your car, master the tracks, and become a racing legend.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <Button size="lg" className="bg-racing-red hover:bg-racing-red/90 text-white">
                PLAY NOW
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-racing-silver/30 text-white hover:bg-white/10">
                WATCH TRAILER
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-racing-accent mb-1">
                  <Car className="h-4 w-4" />
                  <span className="text-sm font-medium">CARS</span>
                </div>
                <span className="text-2xl font-racing text-white">30+</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-racing-accent mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">TRACKS</span>
                </div>
                <span className="text-2xl font-racing text-white">12</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-1 text-racing-accent mb-1">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm font-medium">CUPS</span>
                </div>
                <span className="text-2xl font-racing text-white">5</span>
              </div>
            </div>
          </div>
          
          {/* Feature car image (placeholder) */}
          <div className="relative md:h-[500px] flex items-center justify-center">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute inset-0 bg-racing-red/10 rounded-full blur-3xl transform -translate-y-1/4 opacity-30" />
              
              {/* Car placeholder with racing overlay effects */}
              <div className="relative w-full max-w-md aspect-[16/9] bg-racing-carbon rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-racing-red/20 to-racing-blue/20" />
                <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-lg text-white/30">Car Preview</span>
                </div>
                
                {/* Racing light effects */}
                <div className="absolute -left-4 top-1/4 w-8 h-8 rounded-full bg-racing-red blur-xl animate-pulse-glow" />
                <div className="absolute -right-4 top-1/4 w-8 h-8 rounded-full bg-racing-accent blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -right-4 -bottom-4 bg-racing-carbon/80 backdrop-blur-sm p-3 rounded border border-racing-silver/20">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-4 w-4 text-racing-red" />
                    <span className="text-xs text-white">320 KM/H</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer className="h-4 w-4 text-racing-accent" />
                    <span className="text-xs text-white">3.2s 0-100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
