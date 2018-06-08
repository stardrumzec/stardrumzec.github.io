import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Helmet } from 'react-helmet';
import Plantilla from '../../plantilla/index';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: '100px'
  }
};

class Conciertos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleChange = (event, checked) => {
    this.setState({
      auth: checked
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Plantilla titulo='Conciertos' />
        <Helmet>
          <title>Omar Estrella Drumz | Conciertos</title>
        </Helmet>
        <Dialog onClose={this.handleClose} open={open}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='secondary' onClick={this.handleClose}>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
        <Typography gutterBottom variant='display1'>
          Material-UI
        </Typography>
        <Typography gutterBottom variant='subheading'>
          example project
        </Typography>
        <Button color='primary' onClick={this.handleClick} variant='raised'>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

Conciertos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Conciertos);
