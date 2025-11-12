import { create } from "zustand";
import type { NFT, Artist, Collection, Category } from "../types";

interface AppState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  nfts: NFT[];
  setNFTs: (nfts: NFT[]) => void;

  artists: Artist[];
  setArtists: (artists: Artist[]) => void;

  collections: Collection[];
  setCollections: (collections: Collection[]) => void;

  categories: Category[];
  setCategories: (categories: Category[]) => void;

  selectedNFT: NFT | null;
  setSelectedNFT: (nft: NFT | null) => void;

  isWalletConnected: boolean;
  setWalletConnected: (connected: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),

  nfts: [],
  setNFTs: (nfts) => set({ nfts }),

  artists: [],
  setArtists: (artists) => set({ artists }),

  collections: [],
  setCollections: (collections) => set({ collections }),

  categories: [],
  setCategories: (categories) => set({ categories }),

  selectedNFT: null,
  setSelectedNFT: (nft) => set({ selectedNFT: nft }),

  isWalletConnected: false,
  setWalletConnected: (connected) => set({ isWalletConnected: connected }),
}));
