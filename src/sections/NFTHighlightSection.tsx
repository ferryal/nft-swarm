import React from "react";
import { Button } from "../components/Button";
import { FaEye } from "react-icons/fa";
import highlightImg from "../assets/images/2.2.png";

export const NFTHighlightSection: React.FC = () => {
  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-full mx-auto">
        <div className="relative overflow-hidden h-[600px] group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={highlightImg}
              alt="Featured NFT"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-purple-900 to-transparent opacity-70"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl space-y-6">
              {/* Artist Info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://i.pravatar.cc/150?img=40"
                  alt="Shroomie"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <span className="text-lg font-semibold">Shroomie</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Magic Mashrooms
              </h2>

              {/* Description */}
              <p className="text-lg text-text-primary opacity-90">
                A unique collection of magical mushroom NFTs, each with its own
                personality and special powers in the metaverse.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<FaEye />}
                  ariaLabel="See NFT details"
                >
                  See NFT
                </Button>
              </div>

              {/* Auction Timer (Mock) */}
              <div className="pt-6">
                <p className="text-sm text-text-secondary mb-3">
                  Auction ends in:
                </p>
                <div className="flex gap-6 font-mono text-3xl font-bold">
                  <div className="text-center">
                    <div>59</div>
                    <div className="text-xs text-text-secondary font-normal mt-1">
                      Hours
                    </div>
                  </div>
                  <div className="text-center">
                    <div>59</div>
                    <div className="text-xs text-text-secondary font-normal mt-1">
                      Minutes
                    </div>
                  </div>
                  <div className="text-center">
                    <div>59</div>
                    <div className="text-xs text-text-secondary font-normal mt-1">
                      Seconds
                    </div>
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
