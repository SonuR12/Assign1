"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Item } from "../../../types/item";
import Carousel from "./carousel";

interface ItemModalProps {
  item: Item;
  open: boolean;
  onClose: () => void;
}

export default function ItemModal({ item, open, onClose }: ItemModalProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{item.name}</DialogTitle>
          <DialogDescription>{item.type}</DialogDescription>
        </DialogHeader>

        <Carousel images={item.images} />

        <p className="text-gray-700 mt-4">{item.description}</p>

        <Button className="mt-6 w-full">Enquire</Button>
      </DialogContent>
    </Dialog>
  );
}