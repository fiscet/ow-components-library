import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../shared/styles";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%"
    },
    selected: {
      backgroundColor: color.lightest
    }
  };
});
/**
 * @param  {array} itemsAr - [{label:"Személyes adatok", component:NameCard}, {...}]
 */

export function OwTabs(_ref) {
  var itemsAr = _ref.itemsAr;
  var classes = useStyles();

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return React.createElement("div", {
    className: classes.root
  }, React.createElement(Box, {
    position: "static",
    elevation: 0
  }, React.createElement(Tabs, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "scrollable",
    scrollButtons: "auto",
    "aria-label": "Profile tabs"
  }, BuildTabLabels(itemsAr))), BuildTabPanels(itemsAr, value));
}
OwTabs.defaultProps = {};

function BuildTabLabels(itemsAr) {
  var res = [];
  var classes = useStyles();
  var index = -1;

  if (itemsAr && itemsAr.length > 0) {
    itemsAr.forEach(function (item) {
      index++;
      res.push(React.createElement(Tab, Object.assign({
        label: item.label,
        key: index,
        classes: {
          selected: classes.selected
        }
      }, a11yProps(index))));
    });
  }

  return res;
}

function BuildTabPanels(itemsAr, curValue) {
  var res = [];
  var index = -1;

  if (itemsAr && itemsAr.length > 0) {
    itemsAr.forEach(function (item) {
      index++;
      res.push(React.createElement(TabPanel, {
        value: curValue,
        key: index,
        index: index
      }, item.component));
    });
  }

  return res;
}

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return React.createElement(Typography, Object.assign({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-auto-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-auto-tab-".concat(index)
  }, other), value === index && React.createElement(Box, {
    p: 3
  }, children));
}

function a11yProps(index) {
  return {
    id: "scrollable-auto-tab-".concat(index),
    "aria-controls": "scrollable-auto-tabpanel-".concat(index)
  };
}