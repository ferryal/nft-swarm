import type { IconType } from "react-icons";

export interface NFT {
  id: string;
  title: string;
  artist: string;
  artistAvatar: string;
  image: string;
  price: number;
  highestBid: number;
  currency: string;
}

export interface Artist {
  id: string;
  name: string;
  avatar: string;
  totalSales: number;
  rank: number;
}

export interface Collection {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImages: string[];
  artist: string;
  artistAvatar: string;
}

export interface Category {
  id: string;
  name: string;
  icon: IconType;
  image: string;
}

export interface Stats {
  totalSales: string;
  auctions: string;
  artists: string;
}
