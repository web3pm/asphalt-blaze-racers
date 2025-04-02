
import React from 'react';
import { Trophy, Medal, Clock, User, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';

const leaderboardData = [
  {
    rank: 1,
    player: "SpeedDemon",
    car: "Tornado GT",
    bestLap: "1:32.456",
    change: 0,
  },
  {
    rank: 2,
    player: "NightRider",
    car: "Phantom X",
    bestLap: "1:33.107",
    change: 1,
  },
  {
    rank: 3,
    player: "BurningRubber",
    car: "Venom RS",
    bestLap: "1:33.887",
    change: -1,
  },
  {
    rank: 4,
    player: "DriftKing",
    car: "Phantom X",
    bestLap: "1:34.221",
    change: 2,
  },
  {
    rank: 5,
    player: "ThunderBolt",
    car: "Tornado GT",
    bestLap: "1:35.019",
    change: 0,
  },
];

const Leaderboard = () => {
  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400'; // Gold
      case 2: return 'text-gray-300'; // Silver
      case 3: return 'text-amber-700'; // Bronze
      default: return 'text-white';
    }
  };
  
  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUp className="h-3 w-3 text-green-500" />;
    if (change < 0) return <ArrowDown className="h-3 w-3 text-racing-red" />;
    return <ArrowRight className="h-3 w-3 text-white/50" />;
  };

  return (
    <section id="leaderboard" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Trophy className="h-12 w-12 text-racing-accent mb-4" />
          <h2 className="font-racing text-3xl md:text-4xl text-white mb-3">GLOBAL <span className="text-racing-accent">LEADERBOARD</span></h2>
          <p className="text-white/70 text-center max-w-xl">
            The fastest drivers across all platforms - do you have what it takes to claim the top spot?
          </p>
        </div>
        
        {/* Filters - placeholder */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-4 py-2 bg-racing-carbon/80 border border-racing-silver/20 rounded-full text-sm text-white/80 hover:bg-racing-carbon">
            All Tracks
          </button>
          <button className="px-4 py-2 bg-racing-red border border-racing-red/20 rounded-full text-sm text-white hover:bg-racing-red/80">
            Neon City Circuit
          </button>
          <button className="px-4 py-2 bg-racing-carbon/80 border border-racing-silver/20 rounded-full text-sm text-white/80 hover:bg-racing-carbon">
            Sunset Coastal Run
          </button>
          <button className="px-4 py-2 bg-racing-carbon/80 border border-racing-silver/20 rounded-full text-sm text-white/80 hover:bg-racing-carbon">
            Alpine Rally
          </button>
        </div>
        
        {/* Leaderboard table */}
        <div className="racing-card overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left text-xs font-medium text-white/70">RANK</th>
                <th className="p-4 text-left text-xs font-medium text-white/70">PLAYER</th>
                <th className="p-4 text-left text-xs font-medium text-white/70">CAR</th>
                <th className="p-4 text-left text-xs font-medium text-white/70">BEST LAP</th>
                <th className="p-4 text-center text-xs font-medium text-white/70">CHANGE</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry) => (
                <tr 
                  key={entry.rank} 
                  className={`${
                    entry.rank === 1 
                      ? 'bg-racing-accent/5 border-l-2 border-racing-accent' 
                      : 'border-b border-white/5 hover:bg-white/5'
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {entry.rank <= 3 ? (
                        <Medal className={`h-5 w-5 ${getRankColor(entry.rank)}`} />
                      ) : (
                        <span className={`font-racing text-lg ${getRankColor(entry.rank)}`}>{entry.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-racing-carbon flex items-center justify-center">
                        <User className="h-4 w-4 text-white/70" />
                      </div>
                      <span className="font-medium">{entry.player}</span>
                    </div>
                  </td>
                  <td className="p-4 text-white/80">{entry.car}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-racing-accent" />
                      <span>{entry.bestLap}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1">
                      {getChangeIcon(entry.change)}
                      <span className="text-sm">{Math.abs(entry.change) || '-'}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Your position */}
        <div className="mt-6 racing-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white/70">YOUR POSITION:</span>
            <div className="flex items-center gap-2">
              <span className="font-racing text-lg text-white">247</span>
              <ArrowUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-500">5</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">BEST LAP:</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-racing-accent" />
              <span className="text-white">1:42.889</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
