import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import "../stylefiles/navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [bar, setBar] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const userInfo = useSelector((state) => state.cart.userInfo);

  // console.log(userInfo);

  const Links = [
    { linkname: "Home", to: "/" },
    { linkname: "Menu", to: "menu" },
    { linkname: "Cart", to: "cartpage" },
    { linkname: "Login", to: "login" },
  ];

  const hundleClickActive = (link) => {
    setActive(link);
    setNavOpen(false);
  };
  const [navOpen, setNavOpen] = useState(false);
  const barIcon = () => {
    setNavOpen(!navOpen);
  };

  const handleBar = () => {
    setNavOpen(!navOpen);
    setBar(!bar);
  };

  return (
    <header className="bg-[#161616] z-10  border-b ">
      <Link to="/">
        <div className="flex items-center">
          <img src="/images/logo.webp" className="mr-2 w-10 " alt="logo" />
          <h1 className="text-xl md:text-4xl text-white">Bites</h1>
        </div>
      </Link>
      <nav>
        <div className={`navLinks ${navOpen ? "showme" : ""} `}>
          <ul className="mainlinks bg-[#161616] lg:bg-transparent text-white">
            {Links.map((link, index) => (
              <li
                className={`text-white text-xl ${
                  active === link.linkname ? "text-red-500" : ""
                }  hover:text-red-500  ease-in duration-300 `}
                key={index}
                onClick={() => hundleClickActive(link.linkname)}
              >
                <Link to={link.to}>{link.linkname}</Link>
              </li>
            ))}
            <div className="flex gap-1 items-center cursor-pointer ">
              <MdCall className="text-red-500" size={22} />{" "}
              <span className="text-gray-300">+1 765-722-4305</span>
            </div>
          </ul>
        </div>
      </nav>
      <div className="flex items-center gap-5">
        {userInfo && (
          <div className="flex items-center gap-x-3">
            <p className=" text-sm md:text-lg text-white  font-semibold underline underline-offset-2 capitalize">
              {userInfo.name}
            </p>
            <img
              className="w-10 hidden md:block rounded-full"
              src={userInfo.image}
              alt={userInfo.name}
            />
          </div>
        )}
        <Link to="cartpage" className="flex items-center gap-2">
          <GrCart className="cursor-pointer text-red-500 w-6 h-6 md:w-10 md:h-10" />
          <span className="text-lg text-white"> {cartItems.length}</span>
        </Link>
        <div className="lg:hidden cursor-pointer ">
          {navOpen ? (
            <IoClose
              onClick={() => {
                barIcon();
                handleBar();
              }}
              className="text-red-500 w-6 h-6 md:w-10 md:h-10"
            />
          ) : (
            <FaBarsStaggered
              onClick={() => {
                barIcon();
                handleBar();
              }}
              className="text-white w-6 h-6 md:w-10 md:h-10"
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
