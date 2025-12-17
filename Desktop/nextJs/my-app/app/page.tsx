import Link from "next/link";
import React from "react";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1> Hello world</h1>
      <Link href="/users">User</Link>
      <ProductCard />
    </main>
  );
}
