import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCards from "../components/ProductCards";
import { fetchMenuProduct } from "../RTK/Slices/ProductSlice";

function Menu() {
  const [category, setCategory] = useState("all");
  const [activecategory, setActiveCategory] = useState("all");
  const dispatch = useDispatch();
  const menuProducts = useSelector((state) => state.products.menuProduct);
  const statu = useSelector((state) => state.products.menuStatu);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (statu === "idle") {
      dispatch(fetchMenuProduct());
    }
  }, [dispatch, statu]);

  if (statu === "loading") {
    return <p>loading...</p>;
  }

  if (statu === "failed") {
    return <p>{error}</p>;
  }

  const handleCategory = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const filterCategory =
    category === "all"
      ? menuProducts
      : menuProducts.filter((product) => product.category === category);

  const btnStyle =
    " lg:px-16 py-2 px-3 md:px-10 text-center  rounded-full text-white hover:bg-[#49111c] duration-300 cursor-pointer ";

  return (
    <div className="bg-[#0a0908] w-full px-10 py-10">
      <h1 className="text-6xl font-bold text-white">Menu</h1>
      <div className="">
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4  my-16">
          <li
            onClick={() => handleCategory("all")}
            className={`${btnStyle} ${
              activecategory === "all" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            All
          </li>
          <li
            onClick={() => handleCategory("burger")}
            className={`${btnStyle} ${
              activecategory === "burger" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            Burger
          </li>
          <li
            onClick={() => handleCategory("pizza")}
            className={`${btnStyle} ${
              activecategory === "pizza" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            Pizza
          </li>
          <li
            onClick={() => handleCategory("dessert")}
            className={`${btnStyle} ${
              activecategory === "dessert" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            Dessert
          </li>
          <li
            onClick={() => handleCategory("ice-cream")}
            className={`${btnStyle} ${
              activecategory === "ice-cream" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            Ice Cream
          </li>
          <li
            onClick={() => handleCategory("fries")}
            className={`${btnStyle} ${
              activecategory === "fries" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            Fries
          </li>
          <li
            onClick={() => handleCategory("cake")}
            className={`${btnStyle} ${
              activecategory === "cake" ? "bg-[#49111c]" : "bg-[#5e503f]"
            }`}
          >
            Cake
          </li>
        </ul>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filterCategory.map((product) => (
            <ProductCards key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
