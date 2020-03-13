import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { color } from '../shared/styles';

var styles = function styles(theme) {
  return {
    textField: {
      background: 'white'
    },
    cssLabel: {
      color: color.mediumdark
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderWidth: '1px',
        borderColor: "".concat(color.mediumdark, " !important")
      }
    },
    cssFocused: {
      borderWidth: '1px'
    },
    notchedOutline: {
      color: color.medium,
      borderWidth: '1px',
      borderColor: "".concat(color.mediumdark, " !important")
    }
  };
};

var Customized = function Customized(props) {
  var classes = props.classes,
      id = props.id,
      name = props.name,
      label = props.label,
      _props$InputProps = props.InputProps,
      InputProps = _props$InputProps === void 0 ? {} : _props$InputProps,
      other = _objectWithoutProperties(props, ["classes", "id", "name", "label", "InputProps"]);

  var iprops = Object.assign({}, InputProps, {
    classes: Object.assign({
      root: classes.cssOutlinedInput,
      focused: classes.cssFocused,
      notchedOutline: classes.notchedOutline
    }, InputProps.classes || {})
  });
  return React.createElement(TextField, Object.assign({
    id: id,
    name: name,
    label: label,
    className: classes.textField,
    required: true,
    fullWidth: true,
    margin: "normal",
    variant: "outlined",
    InputLabelProps: {
      classes: {
        root: classes.cssLabel,
        focused: classes.cssFocused
      }
    },
    InputProps: iprops
  }, other));
};

export var OwTextField = withStyles(styles)(Customized);