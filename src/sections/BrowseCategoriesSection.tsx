import React, { useEffect } from "react";
import { CategoryCard } from "../components/CategoryCard";
import { useStore } from "../store/useStore";
import { mockCategories } from "../data/mockData";

export const BrowseCategoriesSection: React.FC = () => {
  const { categories, setCategories } = useStore();

  useEffect(() => {
    setCategories(mockCategories);
  }, [setCategories]);

  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Browse Categories</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
