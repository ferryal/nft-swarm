import React, { useEffect } from "react";
import { ArtistCard } from "../components/ArtistCard";
import { Button } from "../components/Button";
import { FaRocket } from "react-icons/fa";
import { useStore } from "../store/useStore";
import { mockArtists } from "../data/mockData";

export const TopArtistsSection: React.FC = () => {
  const { artists, setArtists } = useStore();

  useEffect(() => {
    setArtists(mockArtists);
  }, [setArtists]);

  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Top creators
            </h2>
            <p className="text-text-secondary text-lg">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            icon={<FaRocket />}
            ariaLabel="View rankings"
          >
            View Rankings
          </Button>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* View Rankings Button */}
        {/* <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            icon={<FaRocket />}
            ariaLabel="View rankings"
          >
            View Rankings
          </Button>
        </div> */}
      </div>
    </section>
  );
};
