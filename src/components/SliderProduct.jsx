import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../RTK/Slices/CartSlice";

function SliderProduct({ id, name, image, price, descrption }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image, descrption }));
    toast.success(`${name} added to the cart`);
  };
  return (
    <>
      <div className={`w-full h-[100vh] flex-shrink-0 `}>
        <div className=" flex gap gap-y-10 flex-col-reverse justify-center items-center lg:flex-row h-full relative  ">
          <div className="lg:flex-1 relative flex flex-col px-10 z-10 ">
            <div>
              <h1 className=" lg:text-8xl text-4xl font-bold  ">{name}</h1>
            </div>
            <p className="text-gray-300 leading-8 my-5 lg:my-16">
              {descrption}
            </p>
            <div className="flex flex-col md:flex-row gap-10 ">
              <button
                onClick={handleAddToCart}
                className="px-10 w-fit py-3 flex items-center gap-2 text-xl  bg-gradient-to-r from-red-600 to-yellow-600 rounded-full "
              >
                Add to cart <GrCart />
              </button>
              <Link to="menu">
                <button className="md:px-10 px-5 py-1 md:py-3 text-xl border flex items-center gap-2 rounded-full hover:border-red-600 hover:text-red-600 duration-300 ">
                  Our Menu <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="relative top-0 lg:flex-1 flex justify-center items-start ">
            <img
              src={image}
              className=" w-[300px] md:w-[400px] lg:w-[600px]  lg:max-w-[600px] lg:max-h-[600px] "
              alt=""
            />
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
    </>
  );
}

export default SliderProduct;
