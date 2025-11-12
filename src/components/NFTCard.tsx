import React from "react";
import type { NFT } from "../types";

interface NFTCardProps {
  nft: NFT;
  onClick?: () => void;
}

export const NFTCard: React.FC<NFTCardProps> = ({ nft, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-background-secondary rounded-20 overflow-hidden hover-scale cursor-pointer group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
      aria-label={`NFT: ${nft.title} by ${nft.artist}`}
    >
      {/* NFT Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={nft.image}
          alt={nft.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* NFT Details */}
      <div className="p-5 space-y-4">
        {/* Title and Artist */}
        <div>
          <h3 className="text-xl font-semibold mb-1">{nft.title}</h3>
          <div className="flex items-center gap-2">
            <img
              src={nft.artistAvatar}
              alt={nft.artist}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-text-secondary text-sm">{nft.artist}</span>
          </div>
        </div>

        {/* Price and Bid */}
        <div className="flex justify-between items-center pt-2 border-t border-text-secondary border-opacity-20">
          <div>
            <p className="text-xs text-text-secondary mb-1">Price</p>
            <p className="font-mono font-semibold">
              {nft.price} {nft.currency}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-secondary mb-1">Highest Bid</p>
            <p className="font-mono font-semibold">
              {nft.highestBid} {nft.currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
