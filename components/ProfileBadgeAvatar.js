import React from "react";
import { makeStyles } from '@material-ui/core/styles'; // import { color } from '../shared/styles';

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { OwIcon } from "./OwIcon";
import sitemapIcon from "@iconify/icons-mdi/sitemap";
import cityIcon from "@iconify/icons-mdi/city";
import homeMapMarkerIcon from "@iconify/icons-mdi/home-map-marker";
import creditCardMarkerIcon from "@iconify/icons-mdi/credit-card-marker";
import fileAccountIcon from "@iconify/icons-mdi/file-account";
import fingerprintIcon from "@iconify/icons-mdi/fingerprint";
import accountPlusIcon from "@iconify/icons-mdi/account-plus";
import accountClockIcon from "@iconify/icons-mdi/account-clock";
var avatarWidth = 220;
var useStyles = makeStyles(function (theme) {
  return {
    root: {
      // backgroundColor: color.lightest,
      // width: avatarWidth,
      padding: theme.spacing(1)
    }
  };
});
export function ProfileBadgeAvatar(_ref) {
  var fullname = _ref.fullname,
      picture = _ref.picture,
      companyName = _ref.companyName,
      workingPlace = _ref.workingPlace,
      orgunit = _ref.orgunit,
      payoffice = _ref.payoffice,
      employeeCode = _ref.employeeCode,
      contractCode = _ref.contractCode,
      dateOfBirth = _ref.dateOfBirth,
      typeOfContract = _ref.typeOfContract;
  var classes = useStyles();
  var userPic = "/img/" + picture;
  return React.createElement(Container, {
    className: classes.root
  }, React.createElement(Avatar, {
    "aria-label": "account of current user",
    "aria-controls": "primary-search-account-menu",
    "aria-haspopup": "true",
    alt: fullname,
    src: userPic,
    style: {
      width: "".concat(avatarWidth, "px"),
      height: "".concat(avatarWidth, "px")
    }
  }), React.createElement(Box, {
    id: "firstGroup",
    pt: 2
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: cityIcon
  })), React.createElement(Box, {
    pr: 1
  }, companyName)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: homeMapMarkerIcon
  })), React.createElement(Box, {
    pr: 1
  }, workingPlace)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: sitemapIcon
  })), React.createElement(Box, {
    pr: 1
  }, orgunit)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: creditCardMarkerIcon
  })), React.createElement(Box, {
    pr: 1
  }, payoffice))), React.createElement(Box, {
    id: "secondGroup",
    pt: 2
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: fingerprintIcon
  })), React.createElement(Box, {
    pr: 1
  }, employeeCode)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: fileAccountIcon
  })), React.createElement(Box, {
    pr: 1
  }, contractCode)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: accountPlusIcon
  })), React.createElement(Box, {
    pr: 1
  }, dateOfBirth)), React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(OwIcon, {
    iconifyIcon: accountClockIcon
  })), React.createElement(Box, {
    pr: 1
  }, typeOfContract))));
} // ProfileBadgeAvatar.defaultProps = {
//   fullname: '',
//   picture: '',
//   companyName: '',
//   workingPlace: '',
//   orgunit: '',
//   payoffice: '',
//   employeeCode: '',
//   contractCode: '',
//   dateOfBirth: '',
//   typeOfContract: '',
// };