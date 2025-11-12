import React from "react";
import { FaRocket } from "react-icons/fa";
import { Button } from "../components/Button";
import img1 from "../assets/images/i.h.png";
import avatarH from "../assets/images/a.h.png";

export const HeroSection: React.FC = () => {
  const nft = {
    id: "1",
    title: "Space Walking",
    artist: "AnimaKid",
    artistAvatar: avatarH,
    image: img1,
  };
  return (
    <section className="bg-background-primary py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Digital Art & Collect{" "}
              <span className="text-primary">NFTs</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <Button
              variant="primary"
              size="lg"
              icon={<FaRocket />}
              ariaLabel="Get started with NFT marketplace"
            >
              Get Started
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-mono">
                  240k+
                </p>
                <p className="text-text-secondary mt-1">Total Sale</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-mono">
                  100k+
                </p>
                <p className="text-text-secondary mt-1">Auctions</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold font-mono">
                  240k+
                </p>
                <p className="text-text-secondary mt-1">Artists</p>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Animation */}
          <div className="relative h-[400px] lg:h-[600px] rounded-20 overflow-hidden">
            <div className="absolute inset-0 rounded-20"></div>
            {/* <FloatingNFT3D /> */}
            <div
              className="bg-background-secondary rounded-20 overflow-hidden hover-scale cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label={`NFT: Distant Galaxy by MoonDancer`}
            >
              {/* NFT Image */}
              <div className="relative w-full">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-[500px]"
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
                    <span className="text-text-secondary text-sm">
                      {nft.artist}
                    </span>
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
