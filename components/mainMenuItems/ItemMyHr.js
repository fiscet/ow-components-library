import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { ListItem } from '@material-ui/core';
import { MenuItemIcon, MenuItemText } from '../MainMenuComponents';
import PersonIcon from '@material-ui/icons/Person';
export default function Item(_ref) {
  var textVisible = _ref.textVisible,
      selected = _ref.selected,
      styleActive = _ref.styleActive,
      props = _objectWithoutProperties(_ref, ["textVisible", "selected", "styleActive"]);

  var classActive = selected ? styleActive : '';
  return React.createElement(ListItem, {
    className: classActive,
    key: "main_data",
    component: "a",
    href: "#"
  }, React.createElement(MenuItemIcon, {
    active: selected
  }, React.createElement(PersonIcon, {
    fontSize: "small"
  })), React.createElement(MenuItemText, {
    active: selected,
    visible: textVisible ? 1 : 0,
    primary: "MyHR"
  }));
}