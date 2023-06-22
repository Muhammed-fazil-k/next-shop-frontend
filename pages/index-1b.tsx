//client side rendering using api routes

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { getProducts } from "../lib/products";



const HomePage: React.FC = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const test = async ()=>{
      const res = await fetch('/api/products')
      const prod = await res.json()
      setProducts(prod)
    }
    test()
  },[])

  console.log('[HomePage] renders ',products);
  
  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-6">
        <Title>Next Blog</Title>
        <p>[TODO : display products]</p>
        <ul>

        {products.map(p=>{
          return (
            <li key={p.id}>
              {p.title}
            </li>
          )
        })}
        </ul>
      </main>
    </>
  );
};
export default HomePage;
