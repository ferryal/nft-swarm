import React from "react";
import type { Category } from "../types";

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const Icon = category.icon;

  return (
    <div
      className="relative bg-background-secondary rounded-20 overflow-hidden hover-scale cursor-pointer group h-[240px]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          // Handle category selection
        }
      }}
      aria-label={`Browse ${category.name} category`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover opacity-50 rotate-hover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-primary opacity-70"></div>

      {/* Icon and Name */}
      <div className="relative h-full flex flex-col items-center justify-center p-6 z-10">
        <div className="backdrop-blur-category bg-background-secondary bg-opacity-50 rounded-full w-24 h-24 flex items-center justify-center mb-4 text-5xl">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold">{category.name}</h3>
      </div>
    </div>
  );
};
