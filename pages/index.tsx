import Head from "next/head";
import React from "react";
import Title from "../components/Title";

const products = [
  {id:1,title:"First product"},
  {id:2,title:"Second product"},
] 


const HomePage: React.FC = () => {
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
