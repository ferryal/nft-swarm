import React from "react";
import w1 from "../assets/images/works/image1.png";
import w2 from "../assets/images/works/image2.png";
import w3 from "../assets/images/works/image3.png";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
    icon: w1,
  },
  {
    id: 2,
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
    icon: w2,
  },
  {
    id: 3,
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    icon: w3,
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">How It Works</h2>
          <p className="text-text-secondary text-lg">
            Find Out How To Get Started
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-background-secondary rounded-20 p-8 text-center hover-scale"
            >
              {/* Icon Circle */}
              <div className="mb-6 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center p-6">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
