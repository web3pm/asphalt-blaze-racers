
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Gauge, 
  Scale, 
  CheckCircle2,
  Crown,
  Flame
} from "lucide-react";

const carData = [
  {
    id: 1,
    name: "Tornado GT",
    class: "S",
    topSpeed: 385,
    acceleration: 96,
    handling: 88,
    premium: false,
  },
  {
    id: 2,
    name: "Phantom X",
    class: "A",
    topSpeed: 350,
    acceleration: 92,
    handling: 94, 
    premium: false,
  },
  {
    id: 3,
    name: "Venom RS",
    class: "S+",
    topSpeed: 400,
    acceleration: 98,
    handling: 90,
    premium: true,
  },
];

const CarSelection = () => {
  const [activeCar, setActiveCar] = useState(0);
  const car = carData[activeCar];

  const nextCar = () => {
    setActiveCar((prev) => (prev + 1) % carData.length);
  };

  const prevCar = () => {
    setActiveCar((prev) => (prev - 1 + carData.length) % carData.length);
  };
  
  const renderStatBar = (value: number, label: string, icon: React.ReactNode) => (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {icon}
          <span className="text-xs font-medium text-white/80">{label}</span>
        </div>
        <span className="text-xs font-medium text-white">{value}</span>
      </div>
      <div className="h-2 bg-racing-blue/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-racing-red to-racing-accent" 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="cars" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-racing text-3xl md:text-4xl text-white mb-3">SELECT YOUR <span className="text-racing-accent">RIDE</span></h2>
          <p className="text-white/70 text-center max-w-xl">
            Choose from our lineup of high-performance vehicles, each with unique handling and specs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Car navigation */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevCar}
              className="border-racing-silver/30 text-white hover:bg-white/10 h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <span className="text-sm text-racing-accent">
                {activeCar + 1}/{carData.length}
              </span>
              <h3 className="text-xl font-racing text-white">{car.name}</h3>
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextCar}
              className="border-racing-silver/30 text-white hover:bg-white/10 h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Car display */}
          <div className="relative h-[250px] flex items-center justify-center">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="absolute inset-0 bg-racing-accent/10 rounded-full blur-3xl opacity-30" />
              
              {/* Car placeholder */}
              <div className="relative w-full max-w-md aspect-[16/9] bg-racing-carbon rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-racing-red/20 to-racing-blue/20" />
                <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-lg text-white/30">{car.name}</span>
                </div>
              </div>
              
              {/* Car class */}
              <div className="absolute -left-2 -top-2 flex items-center justify-center w-12 h-12 rounded-full border-2 border-racing-silver/20 bg-racing-carbon/90 backdrop-blur">
                <span className={`font-racing text-lg ${car.class === 'S+' ? 'text-racing-red' : car.class === 'S' ? 'text-racing-accent' : 'text-white'}`}>
                  {car.class}
                </span>
              </div>
              
              {/* Premium badge */}
              {car.premium && (
                <div className="absolute -right-2 -top-2 bg-racing-carbon/80 backdrop-blur p-1 rounded-full">
                  <Crown className="h-5 w-5 text-racing-accent" />
                </div>
              )}
            </div>
          </div>
          
          {/* Car stats */}
          <div className="flex flex-col gap-5 p-6 racing-card">
            <div className="flex items-center justify-between">
              <h4 className="font-racing text-lg text-white">CAR SPECS</h4>
              {car.premium ? (
                <span className="bg-racing-accent/20 text-racing-accent text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  PREMIUM
                </span>
              ) : (
                <span className="bg-racing-red/20 text-racing-red text-xs px-2 py-1 rounded flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  AVAILABLE
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-3">
              {renderStatBar(car.topSpeed / 4, "TOP SPEED", <Gauge className="h-3 w-3 text-racing-red" />)}
              {renderStatBar(car.acceleration, "ACCELERATION", <Flame className="h-3 w-3 text-racing-accent" />)}
              {renderStatBar(car.handling, "HANDLING", <Scale className="h-3 w-3 text-racing-red" />)}
            </div>
            
            <Button className="w-full bg-racing-red hover:bg-racing-red/90 text-white">
              {car.premium ? "UNLOCK WITH PREMIUM" : "SELECT CAR"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSelection;
