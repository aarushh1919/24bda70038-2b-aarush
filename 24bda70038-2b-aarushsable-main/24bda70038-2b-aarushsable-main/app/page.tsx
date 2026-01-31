"use client";

import { useState } from "react";
import ProductCard from "@/components/product-card";
import SelectControl from "@/components/select-control";
import { Product, SelectOption } from "@/types";

const products: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" },
];

const categoryOptions: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
];

const sortOptions: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
];

export default function Page() {
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  let filtered = filterCategory === "all"
    ? products
    : products.filter((p) => p.category === filterCategory);

  if (sortBy === "low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">Product Filter</h1>

        <div className="flex gap-8">
          <SelectControl
            selectLabel="Category"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={categoryOptions}
            groupLabel="Categories"
            placeholder="Select Category"
          />

          <SelectControl
            selectLabel="Sort"
            value={sortBy}
            onValueChange={setSortBy}
            options={sortOptions}
            groupLabel="Sorting"
            placeholder="Select Sort"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              category={p.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

