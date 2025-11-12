import React, { useEffect } from "react";
import { NFTCard } from "../components/NFTCard";
import { Button } from "../components/Button";
import { FaEye } from "react-icons/fa";
import { useStore } from "../store/useStore";
import { mockNFTs } from "../data/mockData";

export const DiscoverNFTsSection: React.FC = () => {
  const { nfts, setNFTs, setSelectedNFT } = useStore();

  useEffect(() => {
    setNFTs(mockNFTs);
  }, [setNFTs]);

  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Discover More NFTs
            </h2>
            <p className="text-text-secondary text-lg">
              Explore new trending NFTs
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              icon={<FaEye />}
              ariaLabel="View more NFTs"
            >
              See All
            </Button>
          </div>
        </div>

        {/* NFTs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {nfts.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              onClick={() => setSelectedNFT(nft)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
