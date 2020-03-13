import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import Link from "@material-ui/core/Link";
export function OwBlackLink(_ref) {
  var href = _ref.href,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, ["href", "text"]);

  return React.createElement(Link, Object.assign({
    href: href,
    color: "textPrimary"
  }, props), text);
}
OwBlackLink.defaultProps = {
  href: "#",
  text: ""
};