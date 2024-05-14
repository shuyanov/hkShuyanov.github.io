import React from "react";
import Header from "../../molecule/Header/Header";
import MapContainer from "../../molecule/MapContainer/MapContainer";
import { Footer } from "../../molecule/Footer/Footer";
import InputSech from "../../atoms/InputSerch/InputSerch";

export const HomePage = () => {
  return (
    <>
      <Header />
      <InputSech />
      <MapContainer />
      <Footer />
    </>
  );
};
