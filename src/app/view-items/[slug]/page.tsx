"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Carousel from "@/components/ui/carousel";
import { items as staticItems } from "@/lib/data";

interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  coverImage: string;
  images: string[];
  brand?: string;
  price?: string | number;
}

export default function ItemDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const storedItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const merged = [...storedItems];

    let hasNewItems = false;

    staticItems.forEach((staticItem) => {
      if (!merged.find((i) => i.id === staticItem.id)) {
        merged.push(staticItem);
        hasNewItems = true;
      }
    });

    if (hasNewItems) {
      localStorage.setItem("items", JSON.stringify(merged));
    }

    const foundItem = merged.find((i) => i.id === slug);
    setItem(foundItem || null);
  }, [slug]);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg font-semibold">Item not found.</div>
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden min-h-screen flex lg:items-center justify-center">
      <div className="py-12 w-full max-w-6xl">
        <div className="lg:w-full px-2 gap-10 flex flex-col sm:flex-row items-center">
          <div className="h-auto w-auto object-cover object-center rounded overflow-hidden">
            <Carousel images={item.images} />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {item.type}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill={i < 4 ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed line-clamp-4 pb-2">{item.description}</p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{item.price}
              </span>
              <Button className="ml-auto bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-2">
                Enquire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
