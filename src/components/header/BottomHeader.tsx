import { IoMenu } from "react-icons/io5";
import Conatiner from "../Conatiner";
import { navigate } from "@/components/constants/index";
const BottomHeader = () => {
  return (
    <div className="w-full h-10 bg-amazone_light">
      <Conatiner className="h-full flex items-center gap-2 text-white/90">
        <div className="flex items-center justify-center gap-1 hoverEffect">
          <span className="text-xl">
            <IoMenu />
          </span>
          <p className="font-semibold">All</p>
        </div>
        <div className="hidden md:inline-flex">
          {navigate?.map((item) => (
            <p key={item?.title} className="text-sm font-semibold hoverEffect">
              {item?.title}
            </p>
          ))}
        </div>
        <button className="px-4 border border-lightText mb-1 text-amazon_yellow hover:text-red-500 hover:border-red-500 duration-200">
          Sign in
        </button>
      </Conatiner>
    </div>
  );
};

export default BottomHeader;
