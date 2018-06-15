import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../../plantilla/Header";
import HeaderLinks from "../../plantilla/HeaderLinks";
import Footer from "../../plantilla/Footer";

import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";

import logo from "../../activos/img/magic-portal.svg";
import lander from "../../activos/img/lander4.jpg";

const styles = theme => ({
  root: {
    flex: "1 0 100%"
  },
  hero: {
    minHeight: "110vh",
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${lander}) center center fixed`,
    backgroundSize: "cover",
    color:
      theme.palette.type === "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.main
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: `'Merriweather', serif`,
    letterSpacing: ".7rem",
    textIndent: ".7rem",
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only("xs")]: {
      fontSize: 28
    },
    whiteSpace: "nowrap"
  },
  headline: {
    fontFamily: `'Merriweather', serif`,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 500,
    textAlign: "center"
  },
  content: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing.unit * 12
    }
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
    width: "100%",
    height: "35vw",
    maxHeight: 200
  },
  steps: {
    maxWidth: theme.spacing.unit * 130,
    margin: "auto"
  },
  step: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  stepIcon: {
    marginBottom: theme.spacing.unit
  },
  markdownElement: {}
});

class Bienvenido extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>Omar Estrella Drumz</title>
        </Helmet>
        <Header
          brand="🎧"
          changeColorOnScroll={{
            height: 40,
            color: "negro"
          }}
          color="transparent"
          fixed
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div className={classes.hero}>
          <div className={classes.content}>
            <img alt="StardrumzEC" className={classes.logo} src={logo} />
            <div className={classes.text}>
              <Typography
                align="center"
                className={classes.title}
                color="primary"
                component="h1"
                gutterBottom
                variant="display2"
                >
                Omar
              </Typography>
              <Typography
                align="center"
                className={classes.title}
                color="primary"
                component="h1"
                gutterBottom
                variant="display2"
                >
                Estrella
              </Typography>
              <Typography
                className={classes.headline}
                color="inherit"
                component="h2"
                gutterBottom
                variant="headline"
                >
                BATERISTA
              </Typography>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bienvenido);
/* <Button
className={classes.button}
color="primary"
component={Link}
to="/conciertos"
variant="outlined"
>
Conciertos
</Button> */
