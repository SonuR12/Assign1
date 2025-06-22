"use client";

import { useEffect, useState } from "react";
import { items as staticItems } from "@/lib/data";
import { Item } from "../../../types/item";
import ItemCard from "@/components/ui/ItemCard";

export default function ViewItemsPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const storedItems: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    const mergedItems = [...storedItems];
    let updated = false;

    staticItems.forEach((staticItem) => {
      if (!mergedItems.find((item) => item.id === staticItem.id)) {
        mergedItems.push(staticItem);
        updated = true;
      }
    });

    if (updated) {
      localStorage.setItem("items", JSON.stringify(mergedItems));
    }

    setItems(mergedItems);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 pl-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
