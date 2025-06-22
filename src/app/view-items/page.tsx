"use client";
import { useEffect, useState } from "react";
import { items as staticItems } from "@/lib/data";
import { Item } from "../../../types/item";
import ItemCard from "@/components/ui/ItemCard";

export default function ViewItemsPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items") || "[]");
    const merged = [...stored];
     staticItems.forEach((staticItem) => {
      if (!merged.find((item) => item.id === staticItem.id)) {
        merged.push(staticItem);
      }
    });

    setItems(merged);
  }, []);

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 pl-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
    </>
  );
}
