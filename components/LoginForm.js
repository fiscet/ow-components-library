import _regeneratorRuntime from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/regenerator";
import _asyncToGenerator from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../shared/styles";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { OwTextField } from "./OwTextField";
import { OwIconLogo } from "./OwIconLogo";
import { OwButton } from "./OwButton";
import { OwLogo } from "./OwLogo";
var useStyles = makeStyles(function (theme) {
  return {
    paper: {
      backgroundColor: "#fff",
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(2),
      display: "flex",
      flexDirection: "column"
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    iconColor: {
      color: color.mediumdark
    }
  };
});
/**
 * @param  {function} onSubmit - submits the form data, it should come from /lib/authServices
 * @param  {function} onFormSent - sends back the form submit Response
 * @param  {string} btText - the Button text
 */

export function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onFormSent = _ref.onFormSent,
      btText = _ref.btText;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var classes = useStyles();
  return React.createElement("div", {
    className: classes.paper
  }, React.createElement(Box, {
    component: "div",
    mb: 4,
    align: "center"
  }, React.createElement(OwIconLogo, {
    type: "colored"
  })), React.createElement(Box, {
    component: "div",
    mb: 2
  }, React.createElement(OwLogo, {
    type: "colored"
  })), React.createElement("form", {
    className: classes.form,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(e) {
        var data;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                e.stopPropagation();
                _context.next = 4;
                return onSubmit(username, password);

              case 4:
                data = _context.sent;
                onFormSent(data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, React.createElement(OwTextField, {
    id: "username",
    name: "username",
    label: "Username",
    required: true,
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: "end"
      }, React.createElement(PersonIcon, {
        className: classes.iconColor
      }))
    }
  }), React.createElement(OwTextField, {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    required: true,
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: "end"
      }, React.createElement(VpnKeyIcon, {
        className: classes.iconColor
      }))
    }
  }), React.createElement(OwButton, {
    type: "submit",
    fullWidth: true,
    text: btText,
    controlType: "primary",
    className: classes.submit
  })));
}
LoginForm.defaultProps = {
  btText: "LOGIN"
};