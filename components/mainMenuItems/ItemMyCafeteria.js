import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItemIcon, MenuItemText } from '../MainMenuComponents';
import { InlineIcon } from '@iconify/react';
import { color } from '../../shared/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
/** variable part */
// Main Item

import coffeeIcon from '@iconify/icons-mdi/coffee';
var mainIcon = coffeeIcon;
var textLabel = "MyCafeteria"; // Children

var children = [{
  id: '1',
  label: 'Aaaa',
  href: '#'
}, {
  id: '2',
  label: 'BBB',
  href: '#'
}, {
  id: '3',
  label: 'CcCcCc',
  href: '#'
}];
/** /variable part */

var useStyles = makeStyles(function (theme) {
  return {
    primary: {
      color: color.lighter
    },
    active: {
      color: color.lightest
    },
    nested: {
      paddingLeft: theme.spacing(6)
    }
  };
});
export default function Item(_ref) {
  var textVisible = _ref.textVisible,
      selected = _ref.selected,
      styleActive = _ref.styleActive,
      props = _objectWithoutProperties(_ref, ["textVisible", "selected", "styleActive"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var classes = useStyles();
  var styleToApply = classes.primary;

  if (selected) {
    styleToApply = classes.active;
  }

  var handleClick = function handleClick() {
    setOpen(!open);
  };

  var classActive = selected ? styleActive : '';
  return React.createElement(React.Fragment, null, React.createElement(ListItem, {
    className: classActive,
    key: "main_data",
    button: true,
    onClick: handleClick
  }, React.createElement(MenuItemIcon, {
    active: selected
  }, React.createElement(InlineIcon, {
    icon: mainIcon,
    width: "20"
  })), React.createElement(MenuItemText, {
    active: selected,
    visible: textVisible ? 1 : 0,
    primary: textLabel
  }), open ? React.createElement(ExpandMore, {
    className: styleToApply
  }) : React.createElement(ExpandLess, {
    className: styleToApply
  })), React.createElement(Collapse, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, React.createElement(List, {
    component: "div",
    disablePadding: true
  }, children.map(function (child) {
    return React.createElement(ListItem, {
      key: child.id,
      component: "a",
      href: child.href,
      className: classes.nested
    }, React.createElement(MenuItemText, {
      active: selected,
      visible: textVisible ? 1 : 0,
      primary: child.label
    }));
  }))));
}