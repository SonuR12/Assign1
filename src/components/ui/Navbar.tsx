"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 p-4 border-b shadow-sm sticky top-0">
      <Link
        href="/view-items"
        className={pathname.startsWith("/view-items") ? "text-green-600" : ""}
      >
        View Items
      </Link>
      <Link
        href="/add-item"
        className={pathname === "/add-item" ? "text-green-600" : ""}
      >
        Add Item
      </Link>
    </nav>
  );
}
