import React from "react";
async function getData() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Products() {
  const data = await getData();
  return (
    <div className="flex flex-col justify-center gap-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-slate-200 shadow p-4 rounded flex justify-center text-3xl text-black"
        >
          {product.title}
        </div>
      ))}
    </div>
  );
}
