import React from "react";
import { GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../RTK/Slices/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCards({ id, image, name, price, description }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    const product = state.cart.items.find((item) => item.id === id);
    return product ? product.quantity : 0;
  });

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, name, price, description }));
    toast.success(`${name} added to the cart`);
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div className="text-white max-w-[700px] max-h-[450px]  bg-[#49111c] rounded-xl relative flex flex-col content-between">
      <div className="relative flex justify-center">
        <p className="absolute left-2 top-5 font-bold text-lg">${price}</p>
        <img className="max-w-[500px] max-h-[200px]" src={image} alt={name} />
      </div>
      <div className="px-4">
        <h3 className="cap capitalize text-xl my-2">{name}</h3>
        <p className="text-sm leading-6 text-gray-300">{description}</p>
        <div className="flex items-center py-5 gap-5">
          <div className="flex gap-x-4 px-5 py-1 bg-[#5e503f] rounded-full">
            <p
              onClick={handleDecreaseQuantity}
              className="cursor-pointer text-xl"
            >
              -
            </p>
            <span className="text-xl">{quantity}</span>
            <p
              onClick={handleIncreaseQuantity}
              className="cursor-pointer text-xl"
            >
              +
            </p>
          </div>
          <div
            onClick={handleAddToCart}
            className={` px-6 py-2 rounded-full cursor-pointer ${
              quantity ? "bg-[#5e503f]" : "bg-transparent"
            }  `}
          >
            <GrCart size={19} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="z-30"
      />
    </div>
  );
}

export default ProductCards;
