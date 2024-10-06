import { getData } from "@/helper/index";
import Conatiner from "../Conatiner";
import ProductCard from "./ProductCard";
import { ProductType } from "../../../type";
const ProductList = async () => {
  const endpoint = "https://dummyjson.com/products";
  const product = await getData(endpoint);
  const productArray = product?.products;
  console.log(productArray);

  return (
    <Conatiner className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {productArray?.map((product: ProductType) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </Conatiner>
  );
};

export default ProductList;
