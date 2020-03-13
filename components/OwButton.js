import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { owButtonSecondaryTheme, owButtonWarningTheme } from "../shared/styles";
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      height: '40px',
      padding: '0 22px'
    }
  };
});
export var OwButton = function OwButton(_ref) {
  var text = _ref.text,
      type = _ref.type,
      controlType = _ref.controlType,
      props = _objectWithoutProperties(_ref, ["text", "type", "controlType"]);

  var classes = useStyles();

  switch (controlType) {
    case "primary":
      return React.createElement(Button, Object.assign({
        type: type,
        className: classes.root,
        variant: "contained",
        color: "primary",
        disableElevation: true
      }, props), text);

    case "secondary":
      return React.createElement(ThemeProvider, {
        theme: owButtonSecondaryTheme
      }, React.createElement(Button, Object.assign({
        type: type,
        className: classes.root,
        color: "primary"
      }, props), text));

    case "warning":
      return React.createElement(ThemeProvider, {
        theme: owButtonWarningTheme
      }, React.createElement(Button, Object.assign({
        type: type,
        className: classes.root,
        color: "primary"
      }, props), text));

    default:
      return React.createElement(Button, Object.assign({
        type: type,
        className: classes.root,
        variant: "contained",
        disableElevation: true
      }, props), text);
  }
};
OwButton.defaultProps = {
  text: "Default",
  type: "button",
  controlType: "default"
};