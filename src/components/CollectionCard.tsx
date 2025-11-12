import React from "react";
import type { Collection } from "../types";

interface CollectionCardProps {
  collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
}) => {
  return (
    <div className="rounded-20 overflow-hidden hover-scale cursor-pointer group min-w-[330px]">
      {/* Primary Image */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <img
          src={collection.primaryImage}
          alt={collection.name}
          className="w-full h-full rounded-20 object-cover"
        />
      </div>

      {/* Secondary Images Grid */}
      <div className="grid grid-cols-3 gap-4 py-4">
        {collection.secondaryImages.map((image, index) => (
          <div key={index} className="aspect-square rounded-20 overflow-hidden">
            <img
              src={image}
              alt={`${collection.name} ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="aspect-square rounded-20 bg-primary flex items-center justify-center font-mono font-bold text-xl">
          1025+
        </div>
      </div>

      {/* Collection Details */}
      <div className="py-2 pb-5">
        <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
        <div className="flex items-center gap-2">
          <img
            src={collection.artistAvatar}
            alt={collection.artist}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-text-secondary text-sm">
            {collection.artist}
          </span>
        </div>
      </div>
    </div>
  );
};
