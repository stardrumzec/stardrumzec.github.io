import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import BienvenidoPagina from './contenedores/bienvenido';
import ConciertosPagina from './contenedores/conciertos';
class App extends Component {
  render() {
    return (
      <div>
        <Link component='BienvenidoPagina' exact='true' to='/'>
          BienvenidoPagina
        </Link>
        <Link component='ConciertosPagina' exact='true' to='/conciertos'>
          Conciertos
        </Link>
        <Switch>
          <Route component={BienvenidoPagina} exact={true} path='/' />
          <Route component={ConciertosPagina} exact={true} path='/conciertos' />
        </Switch>
      </div>
    );
  }
}

export default App;
/*         <h4>.:Pruebas:. Link internos:</h4>
        <Link to="/" exact="true" component="BienvenidoPagina">
          BienvenidoPagina
        </Link> */
