import Head from "next/head";
import React from "react";
import Title from "../components/Title";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-6">
        <Title>Next Blog</Title>
        <p>[TODO : display products]</p>
      </main>
    </>
  );
};
export default Home;
