import React from "react";
import { Helmet } from "react-helmet";
import Plantilla from "../../plantilla/index";
import Footer from "../../plantilla/Footer";

const Noencontrado = () => {
  return (
    <div>
      <Plantilla titulo="Esta página no existe" />
      <Helmet>
        <title>Página no encontrada</title>
      </Helmet>
      <h1>No encontrado!!!</h1>
      <p>Error 404</p>
      <Footer />
    </div>
  );
};

export default Noencontrado;
