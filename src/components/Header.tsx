
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Trophy, 
  MapPin, 
  User, 
  Menu, 
  X 
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-racing-carbon/80 backdrop-blur-sm border-b border-racing-silver/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6 text-racing-red" />
          <span className="font-racing text-xl text-white">
            ASPHALT<span className="text-racing-accent">BLAZE</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#cars" className="text-sm font-medium text-white/80 hover:text-racing-accent transition-colors flex items-center gap-1">
            <Car className="h-4 w-4" />
            <span>CARS</span>
          </a>
          <a href="#tracks" className="text-sm font-medium text-white/80 hover:text-racing-accent transition-colors flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>TRACKS</span>
          </a>
          <a href="#leaderboard" className="text-sm font-medium text-white/80 hover:text-racing-accent transition-colors flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            <span>LEADERBOARD</span>
          </a>
        </nav>
        
        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="border-racing-accent text-racing-accent hover:bg-racing-accent hover:text-racing-carbon">
            SIGN IN
          </Button>
          <Button size="sm" className="bg-racing-red hover:bg-racing-red/90 text-white">
            PLAY NOW
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-racing-carbon/95 border-t border-racing-silver/10">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <a 
              href="#cars" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5 text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <Car className="h-5 w-5" />
              <span>CARS</span>
            </a>
            <a 
              href="#tracks" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5 text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="h-5 w-5" />
              <span>TRACKS</span>
            </a>
            <a 
              href="#leaderboard" 
              className="flex items-center gap-2 p-3 rounded-md hover:bg-white/5 text-white/80"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy className="h-5 w-5" />
              <span>LEADERBOARD</span>
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="border-racing-accent text-racing-accent hover:bg-racing-accent hover:text-racing-carbon w-full">
                SIGN IN
              </Button>
              <Button className="bg-racing-red hover:bg-racing-red/90 text-white w-full">
                PLAY NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
