import React from "react";
import weeklyImage from "../assets/images/works/weekly.png";

interface WalletOption {
  id: string;
  name: string;
  icon: string;
}

const walletOptions: WalletOption[] = [
  {
    id: "metamask",
    name: "Metamask",
    icon: "🦊",
  },
  {
    id: "wallet-connect",
    name: "Wallet Connect",
    icon: "🔗",
  },
  {
    id: "coinbase",
    name: "Coinbase",
    icon: "💰",
  },
];

export const ConnectWallet: React.FC = () => {
  const handleWalletConnect = (walletId: string) => {
    console.log("Connecting to wallet:", walletId);
    // Handle wallet connection logic here
  };

  return (
    <div className="min-h-screen bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={weeklyImage}
              alt="Space illustration"
              className="w-full h-auto rounded-20"
            />
          </div>

          {/* Right Side - Wallet Options */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Connect Wallet
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>

            {/* Wallet Options */}
            <div className="space-y-4 mb-12">
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => handleWalletConnect(wallet.id)}
                  className="w-full bg-background-secondary hover:bg-opacity-80 transition-all p-5 rounded-20 flex items-center gap-4 hover-scale"
                >
                  <div className="w-10 h-10 bg-accent-primary rounded-full flex items-center justify-center text-2xl">
                    {wallet.icon}
                  </div>
                  <span className="text-xl font-semibold">{wallet.name}</span>
                </button>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="bg-background-secondary rounded-20 p-8">
              <h3 className="text-2xl font-bold mb-2">
                Join Our Weekly Digest
              </h3>
              <p className="text-text-secondary mb-6">
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="flex-1 bg-background-primary text-text-primary px-5 py-3 rounded-20 outline-none focus:ring-2 focus:ring-accent-primary"
                />
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
