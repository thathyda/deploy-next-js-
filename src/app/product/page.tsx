import { Suspense } from "react";
import LoadingComponent from "../loading";
import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { Metadata } from "next";

async function fetchData() {
  const data = await fetch("https://dummyjson.com/products")
  const res = await data.json()
  return res.products;
}

export const metadata: Metadata = {
  title: "Product",
  description: "This is Product page shop",
  keywords: ['shop', 'ecommerce', 'sell']
};

export default async function Home() {
  const products = await fetchData()

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />}>
          {products.map((product: ProductType) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                <CardComponent
                  title={product.title}
                  thumbnail={product.thumbnail}
                />
              </Link>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}




