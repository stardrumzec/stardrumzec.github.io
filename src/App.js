import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import BienvenidoPagina from './contenedores/bienvenido';
import ConciertosPagina from './contenedores/conciertos';
import NoEncontradoPagina from './contenedores/404';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={BienvenidoPagina} exact={true} path='/' />
          <Route component={ConciertosPagina} exact={true} path='/conciertos' />
          <Route component={NoEncontradoPagina} />
        </Switch>
      </div>
    );
  }
}

export default App;
/*         <h4>.:Pruebas:. Link internos:</h4>

        <Link component='BienvenidoPagina' exact='true' to='/'>
          BienvenidoPagina
        </Link>
        <Link component='ConciertosPagina' exact='true' to='/conciertos'>
          Conciertos
        </Link>
        <Link component={NoEncontradoPagina} to='404'>
          404
        </Link>
        */
