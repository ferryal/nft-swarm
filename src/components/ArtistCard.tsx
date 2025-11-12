import React from "react";
import type { Artist } from "../types";

interface ArtistCardProps {
  artist: Artist;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="bg-background-secondary rounded-20 p-5 hover-scale cursor-pointer group relative">
      {/* Rank Badge */}
      <div className="absolute top-4 left-4 bg-background-primary rounded-full w-8 h-8 flex items-center justify-center font-mono text-text-secondary z-10">
        {artist.rank}
      </div>

      {/* Artist Avatar */}
      <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden">
        <img
          src={artist.avatar}
          alt={artist.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Artist Details */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
        <div className="flex justify-center gap-5">
          <p className="text-text-secondary text-sm">Total Sales:</p>
          <p className="font-mono font-semibold">{artist.totalSales} ETH</p>
        </div>
      </div>
    </div>
  );
};
