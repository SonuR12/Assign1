"use client";
import { useState } from "react";

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="w-full h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-md">
        <img
          src={images[index] || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={`Item image ${index + 1}`}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Thumbnail Preview */}
      <div className="flex justify-center gap-3 pt-4 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setIndex(i)}
            alt={`Thumbnail ${i + 1}`}
            className={`h-16 w-24 object-cover rounded-md cursor-pointer transition-all duration-300 border-2 ${
              i === index ? "border-indigo-500 scale-105" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
