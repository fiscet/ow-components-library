import React from "react";
import Box from "@material-ui/core/Box";
export var PageEmpty = function PageEmpty(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Empty page NextGen v2" : _ref$title;
  return (// I need this box for the login 100% height
    React.createElement(Box, {
      id: "mainCont",
      display: "flex",
      flexDirection: "column",
      style: {
        height: "100%",
        minHeight: "100%"
      }
    }, React.createElement(Box, {
      id: "pageBox",
      display: "flex",
      flexDirection: "row",
      flexGrow: 1
    }, children))
  );
};