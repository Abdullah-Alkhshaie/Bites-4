import React from "react";
import Featur from "../components/Featur";
import Gallary from "../components/Gallary";
import Hero from "../components/Hero";
import HomeMenu from "../components/HomeMenu";
import OurTeam from "../components/OurTeam";

function Home() {
  return (
    <>
      <Hero />
      <Gallary />
      <HomeMenu />
      <Featur />
      <OurTeam />
    </>
  );
}

export default Home;
