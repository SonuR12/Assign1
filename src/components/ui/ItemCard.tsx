"use client";

import { useRouter } from "next/navigation";
import { Item } from "../../../types/item";
import { Card } from "./card";

export default function ItemCard({ item }: { item: Item }) {
  const router = useRouter();

  return (
    <Card
      className="p-4 border-none shadow-none rounded-none cursor-pointer hover:shadow-md transition gap-2 h-fit w-96"
      onClick={() => router.push(`/view-items/${item.id}`)}
    >
      <img
        src={item.coverImage}
        alt={item.name}
        className="h-60 w-full object-cover rounded-[0.2vw] mb-2 flex flex-col items-center"
      />
      <div className="flex justify-between items-center mb-2">
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <h3 className="font-semibold text-lg">₹{item.price}</h3>
      </div>
      <span className="line-clamp-2">{item.description}</span>
    </Card>
  );
}
