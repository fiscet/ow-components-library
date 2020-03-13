import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemText } from '@material-ui/core';
import { color } from '../shared/styles';
var useStyles = makeStyles(function (theme) {
  return {
    primary: {
      color: color.lighter,
      fontsize: '0.9rem'
    },
    active: {
      color: color.lightest,
      fontsize: '0.9rem'
    }
  };
});
export default function MenuItemText(_ref) {
  var active = _ref.active,
      visible = _ref.visible,
      props = _objectWithoutProperties(_ref, ["active", "visible"]);

  var _useState = useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  var classes = useStyles();
  var styleToApply = classes.primary;

  if (active) {
    styleToApply = classes.active;
  }

  useEffect(function () {
    setVisible(visible);
  }, [visible]);
  return isVisible ? React.createElement(ListItemText, Object.assign({
    className: styleToApply
  }, props)) : React.createElement("span", null);
}