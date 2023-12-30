import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct } from "../RTK/Slices/ProductSlice";
import SliderProduct from "./SliderProduct";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  const dispatch = useDispatch();
  const heroProduct = useSelector((state) => state.products.heroProduct);
  const statu = useSelector((state) => state.products.heroStatu);
  const error = useSelector((state) => state.products.error);
  const [index, setIndex] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    if (statu === "idle") {
      dispatch(fetchHeroProduct());
    }
  }, [dispatch, statu]);

  const showPrevProduct = () => {
    sliderRef.current.slickPrev();
  };

  const showNextProduct = () => {
    sliderRef.current.slickNext();
  };

  if (statu === "loading") {
    return <p>loading ...</p>;
  }
  if (statu === "failed") {
    return <p>{error}</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10000,
  };

  return (
    <div className="w-full h-[100vh] relative \ overflow-hidden text-white ">
      <div
        style={{ backgroundImage: "url(../../public/images/hero-bg.jpg)" }}
        className="w-full object-cover h-full   "
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50"></div>
        <Slider ref={sliderRef} {...settings}>
          {heroProduct.map((product) => {
            return <SliderProduct key={product.id} {...product} />;
          })}
        </Slider>
      </div>

      <div className=" flex absolute bottom-0 right-10 md:bottom-5 md:right-10 gap-5 ">
        <FaLongArrowAltLeft
          onClick={showPrevProduct}
          className="cursor-pointer"
          size={50}
        />
        <FaLongArrowAltRight
          onClick={showNextProduct}
          className="text-red-900 cursor-pointer"
          size={50}
        />
        {/* <p>
          {" "}
          {heroProduct[index].length}/{heroProduct.length}
        </p> */}
      </div>
    </div>
  );
}

export default Hero;
