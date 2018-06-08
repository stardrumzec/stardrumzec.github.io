import React from 'react';
import { Helmet } from 'react-helmet';
import Plantilla from '../../plantilla/index';

const Noencontrado = () => {
  return (
    <div>
      <Plantilla titulo='Esta página no existe' />
      <Helmet>
        <title>Página no encontrada</title>
      </Helmet>
      <h1>error 404.</h1>
      <p>303</p>
    </div>
  );
};

export default Noencontrado;
