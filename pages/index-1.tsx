//client side rendering 

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { getProducts, getProducts2 } from "../lib/products";



const HomePage: React.FC = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts().then(products=>setProducts(products))
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
