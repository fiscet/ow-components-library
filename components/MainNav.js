import _defineProperty from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/defineProperty";
import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { InlineIcon } from "@iconify/react";
import { useTheme } from "@material-ui/core/styles";
import { color, owDefMainNavTheme } from "../shared/styles";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PerfectScrollbar from "react-perfect-scrollbar";
import backburgerIcon from "@iconify/icons-mdi/backburger";
import { MainMenu } from "./MainMenu";
import { PartnerLogo } from "./PartnerLogo";
var drawerWidth = 300;
var useStyles = makeStyles(function (theme) {
  return {
    hidden: {
      display: "none"
    },
    shown: {
      display: "block"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaper: {
      backgroundColor: color.darkest
    },
    drawerClose: {
      width: 56,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    drawerHeader: {
      overflowY: "visible",
      display: "relative"
    },
    innerWrapper: {
      paddingTop: theme.spacing(1),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3)
    },
    btOpen: {
      color: color.lightest,
      transform: "rotate(180deg)"
    },
    bgOwRed: {
      backgroundColor: color.owRed
    }
  };
});
export function MainNav(_ref) {
  var _clsx, _clsx2;

  var accessControl = _ref.accessControl;
  var classes = useStyles();
  /**
   * Drawer visibility
   */

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];
  /**
   * If it's been opened/closed manually,
   * the window resize doesn't affect the open state
   */


  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openedManually = _useState4[0],
      setOpenedManually = _useState4[1];

  var theme = useTheme();
  var isSmall = useMediaQuery(theme.breakpoints.up("sm"));
  useEffect(function () {
    if (!openedManually) {
      setOpen(isSmall);
    }
  }, [openedManually, isSmall]);

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
    setOpenedManually(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
    setOpenedManually(true);
  };

  return React.createElement(React.Fragment, null, React.createElement(CssBaseline, null), React.createElement(ThemeProvider, {
    theme: owDefMainNavTheme
  }, React.createElement(Drawer, {
    variant: "persistent",
    anchor: "left",
    open: true,
    className: clsx(classes.drawer, (_clsx = {}, _defineProperty(_clsx, classes.drawer, open), _defineProperty(_clsx, classes.drawerClose, !open), _clsx)),
    classes: {
      paper: clsx((_clsx2 = {}, _defineProperty(_clsx2, classes.drawerPaper, open), _defineProperty(_clsx2, classes.drawerClose, !open), _clsx2))
    }
  }, React.createElement(Box, {
    className: classes.drawerHeader
  }, React.createElement(AppBar, {
    elevation: 0,
    position: "static"
  }, React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    pt: 1,
    className: open ? classes.hidden : classes.shown
  }, React.createElement(Box, {
    className: classes.bgOwRed
  }, React.createElement(IconButton, {
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    className: classes.btOpen
  }, React.createElement(InlineIcon, {
    icon: backburgerIcon
  })))), React.createElement(Box, {
    className: open ? classes.shown : classes.hidden
  }, React.createElement(Box, {
    className: classes.bgOwRed
  }, React.createElement(Box, {
    className: classes.innerWrapper
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }, React.createElement(PartnerLogo, null), React.createElement(IconButton, {
    "aria-label": "open drawer",
    onClick: handleDrawerClose,
    style: {
      color: "#FFF"
    }
  }, React.createElement(InlineIcon, {
    icon: backburgerIcon,
    width: "30"
  })))))))), React.createElement(PerfectScrollbar, null, React.createElement(Box, {
    mt: 3
  }), React.createElement(MainMenu, {
    accessControl: accessControl,
    drawerOpen: open
  })), React.createElement(Divider, null))));
}