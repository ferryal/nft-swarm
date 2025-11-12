import React from 'react';
import { FaDiscord, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary py-12 border-t border-text-secondary border-opacity-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">N</span>
              </div>
              <span>NFT Marketplace</span>
            </div>
            <p className="text-text-secondary">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Discord"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-bold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  Rankings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  Connect a wallet
                </a>
              </li>
            </ul>
          </div>

          {/* Join Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Join our weekly digest</h3>
            <p className="text-text-secondary mb-4">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 px-5 py-3 bg-background-primary text-white rounded-20 border-none outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-20 font-semibold hover:bg-purple-600 transition-colors duration-200"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-text-secondary border-opacity-20 text-center text-text-secondary">
          <p>Ⓒ NFT Marketplace. Use this template freely.</p>
        </div>
      </div>
    </footer>
  );
};
