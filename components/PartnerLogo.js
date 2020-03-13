import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { color } from '../shared/styles';
var useStyles = makeStyles(function (theme) {
  return {
    bgColor: {
      backgroundColor: color.owRed,
      maxWidth: '230px'
    },
    bgTransparent: {
      backgroundColor: 'transparent',
      maxWidth: '230px'
    },
    partnerLogo: {
      overflow: 'hidden'
    }
  };
});
export var PartnerLogo = function PartnerLogo(_ref) {
  var type = _ref.type,
      logoFileName = _ref.logoFileName,
      props = _objectWithoutProperties(_ref, ["type", "logoFileName"]);

  var classes = useStyles();

  switch (type) {
    case "colored":
      return React.createElement(Box, {
        display: "flex",
        alignItems: "center",
        px: 1,
        py: 2,
        className: classes.bgColor
      }, React.createElement(Box, {
        pr: 1
      }, React.createElement("img", {
        src: "/img/owWhiteLogoIcon.png",
        alt: ""
      })), React.createElement(Box, {
        className: classes.partnerLogo
      }, React.createElement("img", {
        src: logoFileName,
        alt: ""
      })));

    case "transparent":
      return React.createElement(Box, {
        display: "flex",
        alignItems: "center",
        p: 2,
        className: classes.bgTransparent
      }, React.createElement(Box, {
        pr: 1
      }, React.createElement("img", {
        src: "/img/owWhiteLogoIcon.png",
        alt: ""
      })), React.createElement(Box, {
        className: classes.partnerLogo
      }, React.createElement("img", {
        src: logoFileName,
        alt: ""
      })));

    default:
      return React.createElement(Box, {
        display: "flex",
        alignItems: "center"
      }, React.createElement(Box, {
        pr: 1
      }, React.createElement("img", {
        src: "/img/owWhiteLogoIcon.png",
        alt: ""
      })), React.createElement(Box, {
        className: classes.partnerLogo
      }, React.createElement("img", {
        src: logoFileName,
        alt: ""
      })));
  }
};
PartnerLogo.defaultProps = {
  type: "colored",
  logoFileName: "/img/Company_logo_here.png"
};