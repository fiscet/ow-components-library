import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import { InlineIcon } from "@iconify/react";
export function OwIcon(_ref) {
  var iconifyIcon = _ref.iconifyIcon,
      props = _objectWithoutProperties(_ref, ["iconifyIcon"]);

  return React.createElement(InlineIcon, Object.assign({
    icon: iconifyIcon,
    width: "18px",
    height: "18px"
  }, props));
} // OwIcon.defaultProps = {
//   href: "#",
//   text: ""
// };