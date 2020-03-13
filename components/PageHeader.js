import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ContractSelector } from "./ContractSelector";
import { owDefHeaderTheme } from "../shared/styles";
var barHeight = "64px";
var useStyles = makeStyles(function (theme) {
  return {
    appbar: {
      // borderWidth: "1px",
      // borderStyle: "solid",
      // borderColor: color.medium,
      flexGrow: "1",
      overflow: "hidden"
    },
    colLeft: {
      display: "flex" // marginLeft: "1rem"

    },
    colRight: {
      display: "flex"
    },
    userButton: {
      display: "flex",
      height: barHeight,
      alignItems: "center"
    }
  };
});
/**
 * @param  {string} fullname - Current user name to show
 * @param  {string} picture - Current user picture file name
 * @param  {array} contractList - For the ContractSelector
 * @param  {string} contractCodeSel - For the ContractSelector
 * @param  {function} onContractSel - For the ContractSelector
 */

export function PageHeader(_ref) {
  var fullname = _ref.fullname,
      picture = _ref.picture,
      contractList = _ref.contractList,
      contractCodeSel = _ref.contractCodeSel,
      onContractSel = _ref.onContractSel;
  var userPic = "/img/" + picture;
  var classes = useStyles();
  return React.createElement(ThemeProvider, {
    theme: owDefHeaderTheme
  }, React.createElement(CssBaseline, null), React.createElement(AppBar, {
    color: "primary",
    position: "sticky",
    elevation: 0,
    className: classes.appbar,
    id: "headerAppBar"
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }, React.createElement("div", {
    id: "headerColLeft",
    className: classes.colLeft
  }, "\xA0"), React.createElement("div", {
    id: "headerColRight",
    className: classes.colRight
  }, React.createElement(Grid, {
    container: true,
    alignItems: "center",
    spacing: 3
  }, React.createElement(Grid, {
    item: true,
    md: "auto"
  }, React.createElement(ContractSelector, {
    contractList: contractList,
    contractCodeSel: contractCodeSel,
    onContractSel: onContractSel
  })), React.createElement(Grid, {
    item: true,
    md: "auto"
  }, React.createElement(Button, {
    component: "div",
    className: classes.userButton
  }, React.createElement(Box, {
    mr: 2
  }, React.createElement(Avatar, {
    alt: fullname,
    src: userPic
  })), React.createElement(Box, {
    whiteSpace: "nowrap",
    mr: 2
  }, fullname), React.createElement(Box, {
    whiteSpace: "nowrap",
    mr: 3
  }, React.createElement(KeyboardArrowDownIcon, {
    fontSize: "medium"
  })))))))));
}
PageHeader.defaultProps = {};