import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import Typography from "@material-ui/core/Typography";
export var OwTitle = function OwTitle(_ref) {
  var text = _ref.text,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["text", "variant"]);

  var variantAccepted = ["h1", "h2", "h3", "h4", "h5", "h6"];
  variant = variant.toLowerCase();

  if (!variantAccepted.includes(variant)) {
    return React.createElement(React.Fragment, null, text);
  }

  return React.createElement(Typography, Object.assign({
    variant: variant,
    component: variant
  }, props), text);
};
OwTitle.defaultProps = {
  text: "Welcome in Orgware",
  variant: "h3"
};