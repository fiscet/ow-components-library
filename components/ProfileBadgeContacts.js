import React from "react";
import { makeStyles } from "@material-ui/core/styles"; // import { color } from '../shared/styles';

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { OwIcon } from "./OwIcon";
import deskphoneIcon from "@iconify/icons-mdi/deskphone";
import cellphoneIphoneIcon from "@iconify/icons-mdi/cellphone-iphone";
import atIcon from "@iconify/icons-mdi/at";
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      backgroundColor: 'transparent'
    }
  };
});
export function ProfileBadgeContacts(_ref) {
  var fullname = _ref.fullname,
      jobClass = _ref.jobClass,
      phone = _ref.phone,
      mobile = _ref.mobile,
      email = _ref.email;
  var classes = useStyles();
  return React.createElement(Grid, {
    container: true,
    id: "gridContainer",
    className: classes.root,
    spacing: 2
  }, React.createElement(Grid, {
    item: true,
    md: 6,
    id: "leftColumn"
  }, React.createElement(Typography, {
    variant: "h4"
  }, fullname), React.createElement(Typography, {
    variant: "h5"
  }, jobClass)), React.createElement(Grid, {
    item: true,
    md: 6,
    id: "rightColumn"
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: deskphoneIcon
  })), React.createElement(Box, {
    pr: 1
  }, phone)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: cellphoneIphoneIcon
  })), React.createElement(Box, {
    pr: 1
  }, mobile)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: atIcon
  })), React.createElement(Box, null, email))));
} // ProfileBadgeContacts.defaultProps = {
//   fullname: '',
//   jobClass: '',
//   phone: '',
//   mobile: '',
//   email: ''
// };