import React from "react";
import { HeroSection } from "../sections/HeroSection";
import { TrendingCollectionsSection } from "../sections/TrendingCollectionsSection";
import { TopArtistsSection } from "../sections/TopArtistsSection";
import { BrowseCategoriesSection } from "../sections/BrowseCategoriesSection";
import { DiscoverNFTsSection } from "../sections/DiscoverNFTsSection";
import { NFTHighlightSection } from "../sections/NFTHighlightSection";
import { HowItWorksSection } from "../sections/HowItWorksSection";
import { NewsletterSection } from "../sections/NewsletterSection";

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TrendingCollectionsSection />
      <TopArtistsSection />
      <BrowseCategoriesSection />
      <DiscoverNFTsSection />
      <NFTHighlightSection />
      <HowItWorksSection />
      <NewsletterSection />
    </>
  );
};
