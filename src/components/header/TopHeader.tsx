"use client";
import Image from "next/image";
import Conatiner from "../Conatiner";
import { carticon, logo } from "@/assets";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
const TopHeader = () => {
  const [searchvalue, setSearchvalue] = useState("");
  return (
    <div className="w-full h-20 bg-amazon_dark text-lightText">
      <Conatiner className="flex h-full items-center gap-3">
        {/* images */}
        <Link
          href={"/"}
          className=" flex items-center justify-center hoverEffect"
        >
          <Image
            src={logo}
            alt="logo"
            className="w-20 md:w-28 object-contain mt-1"
            priority={true}
          />
        </Link>
        {/* location */}
        <div className="hidden lg:inline-flex items-center gap-1 hoverEffect ">
          <span className="text-xl">
            <FaLocationDot />
          </span>
          <div>
            <p className="text-xs font-semibold">Deliver to</p>
            <p className="text-base font-semibold">USA</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="hidden lg:inline-flex flex-1 relative">
          <input
            type="text"
            placeholder="search of products amazon"
            className="w-full h-10 px-16 py-2 outline-none rounded-md
             placeholder:text-sm text-base text-amazon_dark"
            onChange={(e) => {
              setSearchvalue(e.target.value);
            }}
            value={searchvalue}
            autoComplete="search"
            name="name"
          />
          <div className="flex items-center justify-center gap-1 absolute top-0 left-0 bg-gray-300 h-full w-12 rounded-l-md text-amazon_dark">
            <p>All</p>
            <span>
              <RiArrowDownSFill />
            </span>
          </div>
          <span
            className=" absolute top-0 right-0 w-12 rounded-r-md bg-amazon_yellow h-full text-amazon_dark
          text-2xl font-semibold flex items-center justify-center"
          >
            <LuSearch />
          </span>
          {searchvalue && (
            <span
              onClick={() => setSearchvalue("")}
              className=" absolute top-2.5 right-14 text-amazon_dark text-2xl hover:text-red-500 font-semibold cursor-pointer"
            >
              <IoCloseOutline />
            </span>
          )}
        </div>
        {/* return policy */}
        <div className="hidden lg:inline-flex flex-col hoverEffect h-[60%]">
          <p className="text-sm font-normal">Return </p>
          <p className="text-sm font-semibold text-white">& orders</p>
        </div>
        {/* account */}
        <div className="hoverEffect h-[60%]">
          <p className="text-xs font-normal">Hello,sign in</p>
          <p className="flex  items-center gap-1 text-xs md:text-sm font-bold text-white">
            Accounts & List
            <span className="hidden md:inline-flex">
              <RiArrowDownSFill />
            </span>
          </p>
        </div>
        {/* cart */}
        <div className=" relative flex items-center justify-center h-[60%] hoverEffect">
          <Image
            src={carticon}
            alt="cartIcon"
            className="w-12 object-contain"
          />
          <span className=" absolute top-0 right-6 font-semibold text-base text-red-500">
            0
          </span>
        </div>
      </Conatiner>
    </div>
  );
};

export default TopHeader;
