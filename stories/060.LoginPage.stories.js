import _defineProperty from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/defineProperty";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../shared/styles";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import Link from '@material-ui/core/Link';
import { Payoff } from "../components/LoginPayoff";
import { PageEmpty } from "../components/PageEmpty";
import { LoginForm } from "../components/LoginForm";
export default {
  title: "OW Design System|Auth/Login Page",
  component: [PageEmpty, LoginForm]
};
var useStyles = makeStyles(function (theme) {
  return {
    hideOverflow: {
      overflow: "hidden"
    },
    hidden: {
      display: "none"
    },
    colLeft: {
      backgroundImage: "url(/img/loginBg.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex"
    },
    colRight: _defineProperty({
      backgroundColor: color.lightest,
      alignSelf: "center"
    }, theme.breakpoints.up("md"), {
      width: "400px",
      minWidth: "400px",
      maxWidth: "400px"
    }),
    loginContainer: _defineProperty({}, theme.breakpoints.down("md"), {
      width: "400px",
      minWidth: "400px",
      maxWidth: "400px",
      overflow: "hidden"
    }),
    logoContainer: _defineProperty({
      textAlign: "center",
      "& img": {
        width: "100px"
      }
    }, theme.breakpoints.up("md"), {
      backgroundColor: "#fff",
      position: "absolute",
      top: theme.spacing(3),
      left: theme.spacing(3),
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px"
    }),
    boxPayoff: {
      alignSelf: "center",
      paddingLeft: theme.spacing(3)
    },
    blackText: {
      color: color.darkest
    }
  };
});

function fakeFunction() {
  return action("fakeFunction invoked");
}

var doLogin = fakeFunction;
var handleLoginRes = fakeFunction;
export var loginPageStory = function loginPageStory() {
  var classes = useStyles();
  return React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(PageEmpty, {
    title: ":: Login ::"
  }, React.createElement(CssBaseline, null), React.createElement(Grid, {
    id: "gridContainer",
    alignItems: "stretch",
    container: true,
    spacing: 0,
    className: classes.hideOverflow
  }, React.createElement(Grid, {
    id: "colLeft",
    item: true,
    xs: 12,
    md: true,
    className: classes.colLeft
  }, React.createElement(Slide, {
    direction: "right",
    in: true,
    timeout: 2000,
    mountOnEnter: true,
    unmountOnExit: true
  }, React.createElement(Box, {
    id: "logoContainer",
    p: 2,
    className: classes.logoContainer
  }, React.createElement("img", {
    src: "/img/appLogo.jpg",
    alt: "",
    width: "100"
  }), React.createElement(Typography, {
    align: "right",
    id: "nextGenTitle"
  }, "Orgware ", React.createElement("b", null, "Connect")))), React.createElement(Box, {
    className: classes.boxPayoff
  }, React.createElement(Payoff, {
    payoffText: "HR \xE9s B\xE9rsz\xE1mfejt\xE9s <br /> zavartalanul!"
  }))), React.createElement(Grid, {
    id: "colRight",
    className: classes.colRight,
    item: true,
    xs: 12,
    md: true
  }, React.createElement(Container, {
    component: "main",
    className: classes.loginContainer
  }, React.createElement(Slide, {
    direction: "down",
    in: true,
    timeout: 600,
    mountOnEnter: true,
    unmountOnExit: true
  }, React.createElement("div", null, React.createElement(LoginForm, {
    onSubmit: doLogin,
    onFormSent: handleLoginRes
  }))), React.createElement(Box, {
    mt: 1
  }, React.createElement(Typography, {
    align: "center"
  }, React.createElement(Fade, {
    in: true,
    timeout: 1100
  }, React.createElement(Link, {
    href: "#",
    className: classes.blackText,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleLoginBox();
    }
  }, "Forgot password?")))))))));
};
loginPageStory.story = {
  name: "Login Page"
};