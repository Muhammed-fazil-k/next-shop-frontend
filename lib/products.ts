export interface Product{
    id:number,
    title:string,
    description:string,
}


function stripProduct(product: any):Product{
    return {
        id:product.id,
        title:product.title,
        description:product.description,
    }
}


export async function getProducts():Promise<Product[]> {
  const response = await fetch("http://localhost:1337/products");
  const products = await response.json();
  return products.map(stripProduct)
}

export async function getProduct(id:any):Promise<Product> {
    const response = await fetch(`http://localhost:1337/products/${id}`);
    const product = await response.json();
    return stripProduct(product)
  }
