import Head from "next/head";
import Title from "./Title";
import React, { PropsWithChildren } from "react";

interface LayoutPageProps extends PropsWithChildren{
  title: string;
}

const Layout: React.FC<LayoutPageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} Next shop</title>
      </Head>
      <main className="px-6 py-6">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
};

export default Layout;
