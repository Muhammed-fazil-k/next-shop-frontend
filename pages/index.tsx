//server side renering using Incremental static generation
import Head from "next/head";
import React from "react";
import Title from "../components/Title";
import { Product, getProducts } from "../lib/products";
import { GetStaticProps } from "next";
import Link from "next/link";

const products1 = [
  {id:1,title:"First product"},
  {id:2,title:"Second product"},
] 

interface HomePageProps{
  products: Product[];
}

export const getStaticProps:GetStaticProps<HomePageProps> = async () => {
  console.log('[HomePage]: getStaticProps()');
  
  const products = await getProducts()
  return {
    props:{
      products
    },
    //whenever you make a a req for this page it will check if props value is expired or not
    revalidate:10 //seconds,
  }
}


const HomePage: React.FC<HomePageProps> = ({products}) => {
  console.log('[HomePage] renders ');
  
  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-6">
        <Title>Next Blog incremetal approach</Title>
        <ul>

        {products.map(product=>{
          return (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
              {product.title}
              
              </Link>
            </li>
          )
        })}
        </ul>
      </main>
    </>
  );
};
export default HomePage;
