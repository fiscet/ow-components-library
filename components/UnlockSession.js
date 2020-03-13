import _regeneratorRuntime from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/regenerator";
import _asyncToGenerator from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../shared/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { OwTitle } from "./OwTitle";
import { OwTextField } from "./OwTextField";
import { OwBlackLink } from "./OwBlackLink";
import { OwButton } from "./OwButton";
var useStyles = makeStyles(function (theme) {
  return {
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    iconColor: {
      color: color.mediumdark
    },
    paper: {
      width: 480,
      backgroundColor: theme.palette.background.paper,
      border: "1px solid white",
      borderRadius: 8,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      // position: "absolute",
      // top: "25%",
      // left: "25%",
      margin: "auto"
    },
    descText: {
      fontSize: theme.typography.fontSize,
      color: color.mediumdark
    },
    avatar: {
      width: 72,
      height: 72
    }
  };
});
/**
 * @param  {string} title
 * @param  {string} bodyText
 * @param  {string} btText
 * @param  {string} username
 * @param  {string} fullname
 * @param  {string} picture
 * @param  {string} escapeUrl
 * @param  {string} escapeText
 * @param  {function} onSubmit
 */

export function UnlockSession(_ref) {
  var title = _ref.title,
      bodyText = _ref.bodyText,
      btText = _ref.btText,
      username = _ref.username,
      fullname = _ref.fullname,
      picture = _ref.picture,
      escapeUrl = _ref.escapeUrl,
      escapeText = _ref.escapeText,
      onSubmit = _ref.onSubmit,
      onFormSent = _ref.onFormSent;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      password = _useState2[0],
      setPassword = _useState2[1];

  var userPic = "img/" + picture;
  var classes = useStyles();
  escapeText = escapeText.replace("%fullname%", fullname);
  return React.createElement("div", {
    id: "divMainContainer",
    className: classes.paper
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    mb: 3
  }, React.createElement(Box, {
    mr: 3
  }, React.createElement(Avatar, {
    alt: fullname,
    src: userPic,
    className: classes.avatar
  })), React.createElement(Box, null, React.createElement(OwTitle, {
    variant: "h6",
    text: title
  }), React.createElement(Typography, {
    component: "div",
    className: classes.descText
  }, bodyText))), React.createElement("form", {
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
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: "end"
      }, React.createElement(PersonIcon, {
        className: classes.iconColor
      })),
      readOnly: true
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
  })), React.createElement(Typography, {
    component: "div",
    align: "center"
  }, React.createElement(OwBlackLink, {
    href: escapeUrl,
    text: escapeText
  })));
}
UnlockSession.defaultProps = {
  title: "YOUR SESSION IS LOCKED",
  bodyText: "Due to inactivity, your session is locked. Enter your password to continue.",
  escapeUrl: "/",
  escapeText: "Are you not %fullname%?",
  btText: "UNLOCK"
};