import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BarraArriba from './Appbar';
import { withRouter } from 'react-router-dom';

class Plantilla extends Component {
  render() {
    return <BarraArriba titulo={this.props.titulo} />;
  }
}

Plantilla.propTypes = {
  titulo: PropTypes.string
};

export default withRouter(Plantilla);
