import Image from "next/image";
import React from "react";
async function getData() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
    { cache: "force-cache" }
  );
  return res.json();
}
export default async function ProductsSsg() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-slate-200 shadow p-4 rounded flex justify-center text-3xl text-black"
        >
          {product.title}
        </div>
      ))}
      <Image src={'/ssg.png'} 
        width={1000}
        height={500} alt="ssg in next" />
    </div>
  );
}
