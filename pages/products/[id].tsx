import React from "react";
import Head from "next/head";
import Title from "../../components/Title";
import { Product, getProduct, getProducts } from "../../lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface ProductPageParams extends ParsedUrlQuery {
    id : string
}

interface ProductPageProps {
    product : Product
}

export const getStaticPaths : GetStaticPaths<ProductPageParams> =async () => {
  const products = await getProducts();
  return {
    paths: products.map((product) => {
      return {
        params: {
          id: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps:GetStaticProps<ProductPageProps> = async ({ params: { id } }) => {
  const product = await getProduct(id);
  return {
    props: {
      product: product,
    },
    //revalidate:30
  };
}

const ProductPage:React.FC<ProductPageProps> = ({ product}) => {
  return (
    <>
      <Head>
        <title>Next shop</title>
      </Head>
      <main className="px-6 py-6">
        <Title>{product.title}</Title>
        <p>
            {product.description}
        </p>
      </main>
    </>
  );
};

export default ProductPage;
