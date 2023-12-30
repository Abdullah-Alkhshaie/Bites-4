import React from "react";

const menu = [
  {
    name: "Burger",
    image: "/images/burger-icon.png",
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    name: "Cake",
    image: "/images/cake-icon.png",
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    name: "Pizza",
    image: "/images/pizza-icon.png",
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },

  {
    name: "Ice Cream",
    image: "/images/ice-cream-icon.png",
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    name: "Dessert",
    image: "/images/dessert-icon.png",
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    name: "Fries",
    image: "/images/fries-icon.png",
    descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

function Gallary() {
  return (
    <div className="bg-[#0a0908] px-10 w-full py-20 text-white flex flex-col items-center">
      <h1 className="text-2xl mb-10">Taste of Food</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {menu.map((item, i) => {
          const { image, name, descrption } = item;
          return (
            <div
              className="flex gap-5 px-5 py-2 cursor-pointer rounded-lg duration-300 ease-in hover:bg-[#49111c] max-w-[400px] items-center"
              key={i}
            >
              <img className="w-20" src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p className="text-[13px] leading-5">{descrption}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallary;
