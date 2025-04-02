
import React from 'react';
import { Car, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-racing-carbon pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-racing-red" />
              <span className="font-racing text-xl text-white">
                ASPHALT<span className="text-racing-accent">BLAZE</span>
              </span>
            </div>
            <p className="text-sm text-white/70 mb-4">
              The ultimate racing experience. Feel the speed, claim the glory!
            </p>
            <div className="flex gap-4 text-white/70">
              <a href="#" className="hover:text-racing-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-racing-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-racing-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-racing-red transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-racing mb-4">GAME</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-racing-accent transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Features</a></li>
              <li><a href="#cars" className="hover:text-racing-accent transition-colors">Cars</a></li>
              <li><a href="#tracks" className="hover:text-racing-accent transition-colors">Tracks</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-racing mb-4">COMMUNITY</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-racing-accent transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Events</a></li>
              <li><a href="#leaderboard" className="hover:text-racing-accent transition-colors">Leaderboard</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-racing mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-racing-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-racing-accent transition-colors">EULA</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2023 Asphalt Blaze Racers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                Language: English
              </a>
              <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
