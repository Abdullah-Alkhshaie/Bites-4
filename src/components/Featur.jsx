import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuChefHat } from "react-icons/lu";
import { BiDish } from "react-icons/bi";

const featur = [
  {
    title: "fast delivery",
    icon: <MdOutlineWatchLater size={60} className="text-red-600" />,
    descption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sun optio consectetur ",
  },
  {
    title: "fresh food",
    icon: <IoFastFoodOutline size={60} className="text-red-600" />,
    descption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sun optio consectetur ",
  },
  {
    title: "experienced chefs",
    icon: <LuChefHat size={60} className="text-red-600" />,
    descption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sun optio consectetur ",
  },
  {
    title: "a variety of dishes",
    icon: <BiDish size={60} className="text-red-600" />,
    descption:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sun optio consectetur ",
  },
];

function Featur() {
  return (
    <div className="bg-[#0a0908] px-10 text-white grid md:grid-cols-2 lg:grid-cols-4 text-center gap-y-10 lg:gap-5 py-52">
      {featur.map((item, i) => (
        <div key={i} className="flex flex-col items-center my-10 gap-y-5">
          <i> {item.icon} </i>
          <h2 className="font-semibold text-xl uppercase   ">{item.title}</h2>
          <span className="w-10 h-1 bg-red-500"></span>
          <p className="text-gray-300 ">{item.descption}</p>
        </div>
      ))}
    </div>
  );
}

export default Featur;
