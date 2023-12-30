import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../RTK/Slices/CartSlice";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const userInfo = useSelector((state) => state.cart.userInfo);
  const dispatch = useDispatch();

  const [paynow, setPaynow] = useState(false);

  const totalPrice = () => {
    const totla = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return totla.toFixed(2);
  };

  const handleCheckOut = () => {
    if (userInfo && userInfo.loggedIn) {
      setPaynow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart has been cleared");
  };

  const handleRemoveFromCart = (name, productId) => {
    dispatch(removeFromCart({ id: productId }));
    toast.success(`${name} has been removed from the cart`);
  };

  const payment = async (token) => {
    try {
      const response = await axios.post("http://127.0.0.1:3001/pay", {
        amount: totalPrice() * 100,
        token: token,
      });
      if (response.data.success) {
        console.log("Payment successful");
      } else {
        console.error("Payment failed");
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <div
      className={`text-center  bg-[#0a0908] text-white ${
        cart.length === 0 ? "h-screen" : ""
      }`}
    >
      {cart.length === 0 ? (
        <div>
          <p className="text-5xl my-20">your cart is empty</p>
          <Link to="/menu">
            <button className="px-8 py-2  bg-[#49111c] text-lg hover:bg-[5e503f] duration-300 rounded-lg">
              Go to menu
            </button>
          </Link>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-10">
          <h2 className="text-5xl my-20">Your Cart</h2>
          <button
            className="px-8 py-2 bg-[#49111c] text-lg hover:bg-[#5e503f] duration-300 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="">
            <div className="text-white  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4  top-20">
              {cart.map((product) => (
                <div
                  className="flex relative w-[300px] h-[400px] bg-[#49111c] rounded-lg shadow-lg flex-col justify-around items-center"
                  key={product.id}
                >
                  <img
                    className=" max-w-[250px] lg:max-w-[350px] h-[150px] lg:max-h-[200px]"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="text-center">
                    <h2 className="text-xl capitalize mb-2">{product.name}</h2>
                    <p>${product.price}</p>
                  </div>
                  <div className="flex gap-x-4 px-5 py-1 bg-[#5e503f] rounded-full text-lg">
                    <p
                      onClick={() =>
                        dispatch(decreaseQuantity({ id: product.id }))
                      }
                      className="cursor-pointer"
                    >
                      -
                    </p>
                    <p>{product.quantity}</p>
                    <p
                      onClick={() =>
                        dispatch(increaseQuantity({ id: product.id }))
                      }
                      className="cursor-pointer"
                    >
                      +
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleRemoveFromCart(product.name, product.id)
                    }
                    className="absolute cursor-pointer -top-2 -left-2"
                  >
                    <CiCircleRemove size={30} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#1f1e1e] my-10 text-lg  rounded-t-lg ">
              <h1 className=" bg-black rounded-t-lg text-3xl py-2 "> Order</h1>
              <div className="flex justify-around py-5">
                <p>Shipping </p>
                <p>Free</p>
              </div>
              <div className="flex justify-around py-5">
                <p>Total: </p>
                <p>${totalPrice()}</p>
              </div>
              <div className="flex justify-around py-5">
                <p>Discount</p>
                <p>$0.0</p>
              </div>
              <div className="flex justify-around py-5">
                <p>Total Price: </p>
                <p>${totalPrice()}</p>
              </div>
              <div className="p-4">
                <button
                  onClick={handleCheckOut}
                  className=" w-full p-2 bg-[#49111c] text-lg hover:bg-[#5e503f] duration-300 rounded-lg"
                >
                  Check Out
                </button>
                {paynow && (
                  <div className="w-full mt-6 flex items-center justify-center">
                    <StripeCheckout
                      stripeKey="pk_test_51OSiQ1CEaPkCM6APBKNr2AobxSoysfD2yipzzg7HYCNwkiRFf6S691luib7DCWUhQi7BfUCb04CIu1epgtuVttQm00X1Qf5PfW"
                      amount={totalPrice() * 100}
                      label="Pay to Bites"
                      description={`Your Payment amount is ${totalPrice()}`}
                      token={payment}
                      email={userInfo.email}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
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

export default Cart;
