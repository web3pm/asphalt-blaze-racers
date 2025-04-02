
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Flag, 
  Gauge, 
  Clock, 
  Trophy, 
  Fuel, 
  Flame, 
  MessageSquare
} from "lucide-react";

const GameUI = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-racing text-3xl md:text-4xl text-white mb-3">IMMERSIVE <span className="text-racing-red">RACING</span> EXPERIENCE</h2>
          <p className="text-white/70 text-center max-w-xl">
            Experience next-gen racing with our intuitive game interface
          </p>
        </div>
        
        {/* Game UI preview */}
        <div className="relative w-full aspect-video max-w-4xl mx-auto racing-card overflow-hidden">
          {/* Simulated game view */}
          <div className="absolute inset-0 bg-gradient-to-b from-racing-blue/50 via-transparent to-racing-blue/50">
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
              Game Preview
            </div>
          </div>
          
          {/* HUD elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top bar */}
            <div className="absolute top-4 left-0 right-0 flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm p-2 rounded">
                  <Clock className="h-4 w-4 text-white" />
                  <span className="text-sm font-racing text-white">01:24.89</span>
                </div>
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm p-2 rounded">
                  <Flag className="h-4 w-4 text-white" />
                  <span className="text-sm font-racing text-white">LAP 2/3</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm p-2 rounded">
                  <Trophy className="h-4 w-4 text-racing-accent" />
                  <span className="text-sm font-racing text-white">POS: 3/8</span>
                </div>
              </div>
            </div>
            
            {/* Speedometer */}
            <div className="absolute bottom-6 right-6 w-32 h-32">
              <div className="w-full h-full rounded-full bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center border border-racing-silver/20">
                <div className="speedometer w-24 h-24 rounded-full relative">
                  <div className="absolute inset-2 rounded-full bg-racing-carbon flex items-center justify-center flex-col">
                    <span className="font-racing text-2xl text-white">278</span>
                    <span className="text-xs text-white/70">KM/H</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minimap */}
            <div className="absolute bottom-6 left-6 w-48 h-48 bg-black/60 backdrop-blur-sm rounded border border-racing-silver/20 p-2">
              <div className="w-full h-full rounded relative bg-racing-blue/50">
                {/* Track outline - placeholder */}
                <div className="absolute inset-2 border-2 border-white/30 rounded-full"></div>
                
                {/* Positions */}
                <div className="absolute h-2 w-2 rounded-full bg-racing-red" style={{ top: '30%', left: '70%' }}></div>
                <div className="absolute h-2 w-2 rounded-full bg-white/70" style={{ top: '25%', left: '65%' }}></div>
                <div className="absolute h-2 w-2 rounded-full bg-white/70" style={{ top: '35%', left: '75%' }}></div>
              </div>
            </div>
            
            {/* Nitro bar */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center">
              <div className="w-48 h-8 bg-black/60 backdrop-blur-sm rounded-full border border-racing-silver/20 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-racing-blue to-racing-red flex items-center justify-center">
                  <Flame className="h-5 w-5 text-white mr-1" />
                  <span className="text-xs font-bold text-white">NITRO</span>
                </div>
              </div>
            </div>
            
            {/* Race chat */}
            <div className="absolute top-4 right-6 w-64">
              <div className="bg-black/60 backdrop-blur-sm p-2 rounded border border-racing-silver/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/70 flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    RACE CHAT
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs"><span className="text-racing-accent">NightRider:</span> <span className="text-white/80">Catch me if you can!</span></p>
                  <p className="text-xs"><span className="text-racing-red">SpeedDemon:</span> <span className="text-white/80">On your left!</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="racing-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-racing-red/20 flex items-center justify-center">
                <Gauge className="h-5 w-5 text-racing-red" />
              </div>
              <h3 className="font-racing text-xl text-white">REAL-TIME TELEMETRY</h3>
            </div>
            <p className="text-white/70 text-sm">
              Monitor your car's performance with detailed real-time stats, including speed, RPM, and tire condition.
            </p>
          </div>
          
          <div className="racing-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-racing-accent/20 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-racing-accent" />
              </div>
              <h3 className="font-racing text-xl text-white">DYNAMIC POSITIONING</h3>
            </div>
            <p className="text-white/70 text-sm">
              Track your position in real-time against competitors with advanced minimap and positioning systems.
            </p>
          </div>
          
          <div className="racing-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-racing-red/20 flex items-center justify-center">
                <Fuel className="h-5 w-5 text-racing-red" />
              </div>
              <h3 className="font-racing text-xl text-white">STRATEGIC RESOURCES</h3>
            </div>
            <p className="text-white/70 text-sm">
              Manage nitro boosts and fuel levels strategically to gain advantage over opponents during critical moments.
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button size="lg" className="bg-racing-red hover:bg-racing-red/90 text-white">
            START RACING
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameUI;
