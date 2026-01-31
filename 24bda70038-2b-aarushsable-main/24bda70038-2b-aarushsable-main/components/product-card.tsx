import { Product } from "@/types";

type Props = {
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({ name, price, category }: Props) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h2 className="text-3xl font-bold">{name}</h2>

      <p className="text-lg text-gray-700 mt-2">
        ${price.toFixed(2)}
      </p>

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full 
        ${
          category === "electronics"
            ? "bg-blue-100 text-blue-700"
            : "bg-purple-100 text-purple-700"
        }`}
      >
        {category}
      </span>
    </div>
  );
}
