//server side renering using Incremental static generation
import Head from "next/head";
import React from "react";
import Title from "../components/Title";
import { Product, getProducts } from "../lib/products";
import { GetStaticProps } from "next";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

const products1 = [
  { id: 1, title: "First product" },
  { id: 2, title: "Second product" },
];

interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  console.log("[HomePage]: getStaticProps()");
  const products = await getProducts();
  return {
    props: {
      products,
    },
    //whenever you make a a req for this page it will check if props value is expired or not
    revalidate: parseInt(process.env.REVALIDATE_SECONDS), //seconds,
  };
};

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  console.log("[HomePage] renders ");

  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-6">
        <Title>Next Blog incremetal approach</Title>
        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {products.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
export default HomePage;
