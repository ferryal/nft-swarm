import React from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { useStore } from '../store/useStore';

export const Navigation: React.FC = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useStore();

  const navItems = ['Marketplace', 'Rankings', 'Connect a wallet'];

  return (
    <nav className="bg-background-primary border-b border-background-secondary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold" aria-label="NFT Marketplace Home">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">N</span>
              </div>
              <span>NFT Marketplace</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-text-primary hover:text-primary transition-colors duration-200 font-semibold"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/connect-wallet">
              <Button
                variant="outline"
                icon={<FaWallet />}
                ariaLabel="Connect wallet"
              >
                Connect Wallet
              </Button>
            </Link>
            <Link to="/create-account">
              <Button variant="primary" ariaLabel="Sign up">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-background-secondary rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-secondary border-t border-text-secondary border-opacity-20 animate-reveal">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-text-primary hover:text-primary transition-colors duration-200 font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Link to="/connect-wallet" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  icon={<FaWallet />}
                  className="w-full"
                  ariaLabel="Connect wallet"
                >
                  Connect Wallet
                </Button>
              </Link>
              <Link to="/create-account" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="primary"
                  className="w-full"
                  ariaLabel="Sign up"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
