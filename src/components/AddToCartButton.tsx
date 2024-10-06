import { IoCartOutline } from "react-icons/io5";

const AddToCartButton = () => {
  return (
    <div>
      <button
        className="w-full bg-amazon_yellow text-amazon_dark hover:text-white rounded-full h-10 flex 
      items-center justify-center gap-2 font-semibold hover:bg-amazon_dark duration-300"
      >
        Add to card{" "}
        <span className="text-2xl">
          <IoCartOutline />
        </span>
      </button>
    </div>
  );
};

export default AddToCartButton;
