import Image from "next/image";
import React from "react";

async function getData() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function ProductsSsr() {
  const data = await getData();

  const codeToCopy = `async function getData() {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/jewelery",
      { cache: "no-store" }
    );
    return res.json();
  }
  export default async function ProductsSsr() {
    const data = await getData();
    return (
      <div className="flex flex-col justify-center items-center gap-6">
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
  }`;

  

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-slate-200 shadow p-4 rounded flex justify-center text-3xl text-black"
        >
          {product.title}
        </div>
      ))}
      <code className="bg-gray-700 text-white max-w-lg w-[80%] p-5 my-5">
        {codeToCopy}
      </code>

      <Image src={"/ssr.png"} width={1000} height={500} alt="ssr in next" />
    </div>
  );
}
