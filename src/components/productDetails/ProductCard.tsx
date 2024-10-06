import Link from "next/link";
import { ProductType } from "../../../type";
import Image from "next/image";
import ProductRating from "../ProductRating";
import PriceFormated from "../PriceFormated";
import AddToCartButton from "../AddToCartButton";

interface Props {
  product: ProductType;
}
const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-full border relative border-gray-400 bg-gray-100 rounded-lg group overflow-hidden">
      <div className="px-4 py-2">
        {/* images part */}
        <Link
          href={{
            pathname: `products/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <Image
            src={product?.images[0]}
            alt="product_Image"
            width={200}
            height={200}
            className="h-64 w-full object-contain hover:scale-110 duration-200"
          />
        </Link>
        {/* description part */}
        <div className="flex flex-col gap-3">
          <div className=" absolute top-2 right-2 border border-gray-400 px-4 rounded-full">
            <p>{product?.discountPercentage}%</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-wide text-gray-600">
              {product?.category}
            </p>
            <ProductRating rating={product?.rating} />
          </div>
          <p className="text-base font-semibold text-amazone_light">
            {product?.title.slice(0, 10)}...
          </p>
          <div className="flex items-center gap-5">
            <PriceFormated
              amount={product?.price}
              className="text-base text-blue-500 font-semibold"
            />
          </div>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
