import React from "react";
import { Product, getProduct, getProducts } from "../../lib/products";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ApiError } from "../../lib/api";
import Image from "next/image";
import Layout from "../../components/Layout";
interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

interface ProductPageProps {
  product: Product;
}

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  const products = await getProducts();
  return {
    paths: products.map((product) => {
      return {
        params: {
          id: product.id.toString(),
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params: { id },
}) => {
  try {
    const product = await getProduct(id);
    console.log("[pages/id -serverside]: id", id);

    return {
      props: {
        product: product,
      },
      revalidate: parseInt(process.env.REVALIDATE_SECONDS),
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return {
        notFound: true,
      };
    } else {
      throw err;
    }
  }
};

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <Layout title={product.title}>
      <div className="flex flex-col lg:flex-row">
        <div>
          <Image src={product.pictureUrl} alt="" width={640} height={480} />
        </div>
        <div className="flex-1 lg:ml-4">
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold">{product.price}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
