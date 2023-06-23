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
    fallback: 'blocking',
  };
}

export const getStaticProps:GetStaticProps<ProductPageProps> = async ({ params: { id } }) => {
  try{
    const product = await getProduct(id);
    console.log('[pages/id -serverside]: id',id);
  
    return {
      props: {
        product: product,
      },
      revalidate:10
    };
  }catch(err){
    return {
      notFound:true
    }
  }
  
  
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
