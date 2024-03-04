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

  // Generate the code dynamically
  const codeSnippet = `
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
        >{product.title}
        </div>
      ))}</div>
  );
}
`;

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
      <code className="bg-gray-700 text-white max-w-lg w-[80%] p-5 my-5">
        {codeSnippet}
      </code>
      <Image src={"/ssg.png"} width={1000} height={500} alt="ssg in next" />
    </div>
  );
}
