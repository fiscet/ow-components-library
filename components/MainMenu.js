import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ItemMyHr from './mainMenuItems/ItemMyHr';
import ItemMyLeave from './mainMenuItems/ItemMyLeave';
import ItemMyCafeteria from './mainMenuItems/ItemMyCafeteria';
import ItemMyTime from './mainMenuItems/ItemMyTime';
import ItemAdmin from './mainMenuItems/ItemAdmin';
import { color } from '../shared/styles';
var useStyles = makeStyles(function (theme) {
  return {
    listItemActive: {
      width: "calc(98% - 20px)",
      backgroundColor: color.owRed,
      '&:hover': {
        backgroundColor: color.owRed
      },
      '&::after': {
        backgroundColor: color.owRed,
        content: '\' \'',
        position: 'absolute',
        zIndex: '0',
        top: '0',
        right: '-10px',
        width: '20px',
        height: '100%',
        transform: 'skew(21deg)'
      }
    }
  };
});
/**
 * It builds and display the main menu, in base the permission of Access Control acquired by the login
 * 
 * @function
 * 
 * @param  {object} accessControl - Access Control permission object
 * @param  {boolean} drawerOpen - It notifies the items if the main Menu Bar (Drawer) is open or not. If not, they disply only their icon without text
 * 
 * @tutorial - See https://onury.io/accesscontrol/?api=ac
 */

export function MainMenu(_ref) {
  var accessControl = _ref.accessControl,
      drawerOpen = _ref.drawerOpen;
  var classes = useStyles();
  /**
   * textVisible: if the drawer is closed, the text is hidden
   * selected: the active menu item, the one has been just clicked
   * styleActive: pass the css class to show the active item with the red stripe
   */

  return React.createElement(List, null, // accessControl.can('user').readOwn('myHr') ||
  // accessControl.can('admin').readOwn('myHr') &&
  React.createElement(ItemMyHr, {
    textVisible: drawerOpen,
    selected: true,
    styleActive: classes.listItemActive
  }), // accessControl.can('user').readOwn('myLeave') ||
  // accessControl.can('admin').readOwn('myLeave') &&
  React.createElement(ItemMyLeave, {
    textVisible: drawerOpen,
    selected: false,
    styleActive: classes.listItemActive
  }), // accessControl.can('user').readOwn('myCafeteria') ||
  // accessControl.can('admin').readOwn('myCafeteria') &&
  React.createElement(ItemMyCafeteria, {
    textVisible: drawerOpen,
    selected: false,
    styleActive: classes.listItemActive
  }), // accessControl.can('user').readOwn('myTime') ||
  // accessControl.can('admin').readOwn('myTime') &&
  React.createElement(ItemMyTime, {
    textVisible: drawerOpen,
    selected: false,
    styleActive: classes.listItemActive
  }), React.createElement(ItemAdmin, {
    textVisible: drawerOpen,
    selected: false,
    styleActive: classes.listItemActive
  }));
}