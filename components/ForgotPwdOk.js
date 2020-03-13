import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../shared/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { OwTitle } from "./OwTitle";
import { OwBlackLink } from "./OwBlackLink";
var useStyles = makeStyles(function (theme) {
  return {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      width: "400px",
      maxWidth: "400px",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid white",
      borderRadius: 8,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: "auto"
    },
    icon: {
      fontSize: 64,
      color: color.mediumdark
    }
  };
});
/**
 * @param  {string} title
 * @param  {string} text
 * @param  {string} escapeUrl
 * @param  {string} escapeText
 * @param  {function} onClose
 */

export function ForgotPwdOk(_ref) {
  var title = _ref.title,
      text = _ref.text,
      escapeUrl = _ref.escapeUrl,
      escapeText = _ref.escapeText,
      onClose = _ref.onClose;
  var classes = useStyles();
  return React.createElement("div", {
    className: classes.paper
  }, React.createElement(Typography, {
    component: "div",
    align: "center"
  }, React.createElement(MailOutlineIcon, {
    className: classes.icon
  }), React.createElement(OwTitle, {
    variant: "h6",
    text: title
  }), React.createElement(Box, {
    my: 2,
    id: "simple-modal-description"
  }, text), React.createElement(OwBlackLink, {
    href: escapeUrl,
    text: escapeText,
    onClick: function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    }
  })));
}
ForgotPwdOk.defaultProps = {
  title: "Email sent",
  text: "Use this multipurpose dialog for modal windows or popovers. Contains hidden layers to swap buttons and icons. Go explore it",
  escapeUrl: "/login",
  escapeText: "Go back to login",
  onClose: null
};