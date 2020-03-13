import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemIcon } from '@material-ui/core';
import { color } from '../shared/styles';
var useStyles = makeStyles(function (theme) {
  return {
    primary: {
      color: color.lighter,
      fontsize: '0.9rem',
      minWidth: '32px'
    },
    active: {
      color: color.lightest,
      fontsize: '0.9rem',
      minWidth: '32px',
      zIndex: '2'
    }
  };
});
export default function MenuItemIcon(_ref) {
  var active = _ref.active,
      props = _objectWithoutProperties(_ref, ["active"]);

  var classes = useStyles();
  var styleToApply = classes.primary;

  if (active) {
    styleToApply = classes.active;
  }

  return React.createElement(ListItemIcon, Object.assign({
    className: styleToApply
  }, props));
}