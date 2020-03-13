import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
var useStyles = makeStyles(function (theme) {
  return {
    logoContainer: {
      width: "110px",
      maxWidth: "100px",
      margin: '0 auto',
      "& img": {
        width: "100%"
      }
    }
  };
});
export var OwIconLogo = function OwIconLogo(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ["type"]);

  var classes = useStyles();

  switch (type) {
    case "colored":
      return React.createElement(Box, Object.assign({
        className: classes.logoContainer
      }, props), React.createElement("img", {
        src: "/img/owIconLogoColored.png",
        alt: ""
      }));

    case "transparent":
      return React.createElement(Box, Object.assign({
        className: classes.logoContainer
      }, props), React.createElement("img", {
        src: "/img/owIconLogoTransparent.png",
        alt: ""
      }));

    default:
      return React.createElement(React.Fragment, null);
  }
};
OwIconLogo.defaultProps = {
  type: "colored"
};