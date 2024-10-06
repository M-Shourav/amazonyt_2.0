import { ProductType } from "../../type";
import PriceFormated from "./PriceFormated";

interface Props {
  regularPrice: number;
  discountPrice: number;
  product?: ProductType;
}

const ProductPrice = ({ regularPrice, discountPrice }: Props) => {
  return (
    <div>
      <PriceFormated amount={regularPrice} />
      <PriceFormated amount={discountPrice} />
    </div>
  );
};

export default ProductPrice;
