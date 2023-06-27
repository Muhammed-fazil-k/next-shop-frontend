import Head from "next/head";
import Title from "./Title";
import React, { PropsWithChildren } from "react";
import NavBar from "./NavBar";

interface LayoutPageProps extends PropsWithChildren{
  title: string;
}

const Layout: React.FC<LayoutPageProps> = ({ title, children }) => {
  const titleHeading = `${title} Next shop`;
  return (
    <>
      <Head>
        <title>{titleHeading}</title>
      </Head>
      <NavBar/>
      <main className="px-6 py-6">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
};

export default Layout;
