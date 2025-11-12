import type { NFT, Artist, Collection, Category } from "../types";
import img1 from "../assets/images/1.png";
import img11 from "../assets/images/1.1.png";
import img12 from "../assets/images/1.2.png";
import img2 from "../assets/images/2.png";
import img21 from "../assets/images/2.1.png";
import img22 from "../assets/images/2.2.png";
import img3 from "../assets/images/3.png";
import img31 from "../assets/images/3.1.png";
import img32 from "../assets/images/3.2.png";
import a1 from "../assets/images/a.1.png";
import a2 from "../assets/images/a.2.png";
import a3 from "../assets/images/a.3.png";

import c1 from "../assets/images/creator/1.png";
import c2 from "../assets/images/creator/2.png";
import c3 from "../assets/images/creator/3.png";
import c4 from "../assets/images/creator/4.png";
import c5 from "../assets/images/creator/5.png";
import c6 from "../assets/images/creator/6.png";
import c7 from "../assets/images/creator/7.png";
import c8 from "../assets/images/creator/8.png";
import c9 from "../assets/images/creator/9.png";
import c10 from "../assets/images/creator/10.png";
import c11 from "../assets/images/creator/11.png";
import c12 from "../assets/images/creator/12.png";

import d1 from "../assets/images/discover/1.png";
import d2 from "../assets/images/discover/2.png";
import d3 from "../assets/images/discover/3.png";

import {
  PiPaintBrushLight,
  PiStackThin,
  PiMusicNotesThin,
  PiCameraLight,
  PiVideoCameraLight,
  PiMagicWandLight,
  PiBasketball,
  PiPlanet,
} from "react-icons/pi";

// Mock NFTs
export const mockNFTs: NFT[] = [
  {
    id: "1",
    title: "Distant Galaxy",
    artist: "MoonDancer",
    artistAvatar: "https://i.pravatar.cc/150?img=1",
    image: d1,
    price: 1.63,
    highestBid: 0.33,
    currency: "ETH",
  },
  {
    id: "2",
    title: "Life On Edena",
    artist: "NebulaKid",
    artistAvatar: "https://i.pravatar.cc/150?img=2",
    image: d2,
    price: 2.5,
    highestBid: 1.2,
    currency: "ETH",
  },
  {
    id: "3",
    title: "AstroFiction",
    artist: "Spaceone",
    artistAvatar: "https://i.pravatar.cc/150?img=3",
    image: d3,
    price: 1.8,
    highestBid: 0.9,
    currency: "ETH",
  },
];

// Mock Artists
export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Keepitreal",
    avatar: c1,
    totalSales: 34.53,
    rank: 1,
  },
  {
    id: "2",
    name: "DigiLab",
    avatar: c2,
    totalSales: 32.45,
    rank: 2,
  },
  {
    id: "3",
    name: "GravityOne",
    avatar: c3,
    totalSales: 28.93,
    rank: 3,
  },
  {
    id: "4",
    name: "Juanie",
    avatar: c4,
    totalSales: 25.3,
    rank: 4,
  },
  {
    id: "5",
    name: "BlueWhale",
    avatar: c12,
    totalSales: 22.7,
    rank: 5,
  },
  {
    id: "6",
    name: "Mr Fox",
    avatar: c5,
    totalSales: 20.5,
    rank: 6,
  },
  {
    id: "7",
    name: "Shroomie",
    avatar: c6,
    totalSales: 18.9,
    rank: 7,
  },
  {
    id: "8",
    name: "Robotica",
    avatar: c7,
    totalSales: 16.8,
    rank: 8,
  },
  {
    id: "9",
    name: "RustyRobot",
    avatar: c8,
    totalSales: 15.2,
    rank: 9,
  },
  {
    id: "10",
    name: "Animakid",
    avatar: c9,
    totalSales: 13.5,
    rank: 10,
  },
  {
    id: "11",
    name: "Dotgu",
    avatar: c10,
    totalSales: 12.3,
    rank: 11,
  },
  {
    id: "12",
    name: "Ghiblier",
    avatar: c11,
    totalSales: 11.1,
    rank: 12,
  },
];

// Mock Collections
export const mockCollections: Collection[] = [
  {
    id: "1",
    name: "DSGN Animals",
    primaryImage: img1,
    secondaryImages: [img11, img12],
    artist: "MrFox",
    artistAvatar: a1,
  },
  {
    id: "2",
    name: "Magic Mushrooms",
    primaryImage: img2,
    secondaryImages: [img21, img22],
    artist: "Shroomie",
    artistAvatar: a2,
  },
  {
    id: "3",
    name: "Disco Machines",
    primaryImage: img3,
    secondaryImages: [img31, img32],
    artist: "BeKind2Robots",
    artistAvatar: a3,
  },
];

// Mock Categories
export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Art",
    icon: PiPaintBrushLight,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&h=500&fit=crop",
  },
  {
    id: "2",
    name: "Collectibles",
    icon: PiStackThin,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop",
  },
  {
    id: "3",
    name: "Music",
    icon: PiMusicNotesThin,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&h=500&fit=crop",
  },
  {
    id: "4",
    name: "Photography",
    icon: PiCameraLight,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop",
  },
  {
    id: "5",
    name: "Video",
    icon: PiVideoCameraLight,
    image:
      "https://images.unsplash.com/photo-1635776062043-223faf322554?w=500&h=500&fit=crop",
  },
  {
    id: "6",
    name: "Utility",
    icon: PiMagicWandLight,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop",
  },
  {
    id: "7",
    name: "Sport",
    icon: PiBasketball,
    image:
      "https://images.unsplash.com/photo-1635776062043-223faf322554?w=500&h=500&fit=crop",
  },
  {
    id: "8",
    name: "Virtual Worlds",
    icon: PiPlanet,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&h=500&fit=crop",
  },
];
