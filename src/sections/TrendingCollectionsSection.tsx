import React, { useEffect } from 'react';
import { CollectionCard } from '../components/CollectionCard';
import { useStore } from '../store/useStore';
import { mockCollections } from '../data/mockData';

export const TrendingCollectionsSection: React.FC = () => {
  const { collections, setCollections } = useStore();

  useEffect(() => {
    setCollections(mockCollections);
  }, [setCollections]);

  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trending Collection
          </h2>
          <p className="text-text-secondary text-lg">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        {/* Collections Scroll Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-8" style={{ minWidth: 'min-content' }}>
              {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
