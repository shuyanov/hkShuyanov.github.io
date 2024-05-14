import React from "react";
import Header from "../../molecule/Header/Header";
import MapContainer from "../../molecule/MapContainer/MapContainer";
import { Footer } from "../../molecule/Footer/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MapContainer />
      <Footer />
    </>
  );
};
