import React from "react";

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: "1",
        },
      },
    ],
    fallback: true,
  };
}

export function getStaticProps(ctx) {
  console.log(ctx);

  return {
    props: {
      ctx,
    },
  };
}

const ProductPage = () => {
  return <div>This is a product Page</div>;
};

export default ProductPage;
