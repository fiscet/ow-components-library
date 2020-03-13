import React from "react";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles"; // import SnackDisplayer from "./SnackDisplayer";

import { PageHeader } from "./PageHeader";
import { MainNav } from "./MainNav";
/**
 * Base complete page that display the nextjs pages
 *
 * @param {Component} children - The pages inside pages/
 * @param {object} accessControl - Access Control object
 * @param  {string} fullname - PageHeader: Current user name to show
 * @param  {string} picture - PageHeader:  user picture file name
 * @param  {array} contractList - PageHeader: For the ContractSelector
 * @param  {string} contractCodeSel - PageHeader: For the ContractSelector
 * @param  {function} onContractSel - PageHeader: For the ContractSelector
 * @component
 */

export function PageBase(_ref) {
  var children = _ref.children,
      accessControl = _ref.accessControl,
      fullname = _ref.fullname,
      picture = _ref.picture,
      contractList = _ref.contractList,
      contractCodeSel = _ref.contractCodeSel,
      onContractSel = _ref.onContractSel;
  return React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(Box, {
    display: "flex"
  }, React.createElement(MainNav, {
    accessControl: accessControl
  }), React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1
  }, React.createElement(PageHeader, {
    fullname: fullname,
    picture: picture,
    contractList: contractList,
    contractCodeSel: contractCodeSel,
    onContractSel: onContractSel
  }), React.createElement(Box, {
    p: 3,
    id: "mainContent"
  }, children))));
}