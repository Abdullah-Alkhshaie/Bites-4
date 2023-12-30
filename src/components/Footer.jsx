import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const menu = ["burger", "pizza", "ice cream", "cake", "fries", "dessert"];
const chefs = ["mustafa seol", "gravk los", "sutri morr"];
const social = [<FaXTwitter />, <FaFacebook />, <FaInstagramSquare />];

function Footer() {
  return (
    <div className="bg-[#49111c] h- items-center grid md:grid-cols-2 lg:grid-cols-5 px-10 py-5 gap-5 text-white">
      <div className="flex items-center">
        <img src="/images/logo.webp" className="mr-2 w-10" alt="logo" />
        <h1 className="text-4xl text-white">Bites</h1>
      </div>
      <div>
        <h1 className="text-2xl mb-3">Menu</h1>
        <div>
          {menu.map((item, i) => (
            <p key={i} className="text-sm mb-2 capitalize">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-3">Meet Chefs</h1>
        <div>
          {chefs.map((item, i) => (
            <p className="text-sm mb-2 capitalize" key={i}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-3">Social Media</h1>
        <div className="w-fit">
          {social.map((item, i) => (
            <p className="text-3xl mb-3 capitalize cursor-pointer" key={i}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-3">Contanct us</h1>
        <div className="">
          <input
            type="email"
            className="rounded-full px-2 py-2  text-black w-full outline-none mr-4"
            placeholder="email"
          />
          <button className="cursor-pointer mt-2 px-2 py-2 w-full rounded-full  bg-[#5e503f]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
