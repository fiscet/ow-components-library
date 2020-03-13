import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import { color } from './shared/styles';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { InlineIcon } from "@iconify/react";
import sitemapIcon from "@iconify/icons-mdi/sitemap";
import cityIcon from "@iconify/icons-mdi/city";
import homeMapMarkerIcon from "@iconify/icons-mdi/home-map-marker";
import creditCardMarkerIcon from "@iconify/icons-mdi/credit-card-marker";
import fileAccountIcon from "@iconify/icons-mdi/file-account";
import fingerprintIcon from "@iconify/icons-mdi/fingerprint";
import accountPlusIcon from "@iconify/icons-mdi/account-plus";
import accountClockIcon from "@iconify/icons-mdi/account-clock";
import deskphoneIcon from "@iconify/icons-mdi/deskphone";
import cellphoneIphoneIcon from "@iconify/icons-mdi/cellphone-iphone";
import atIcon from "@iconify/icons-mdi/at";
var avatarWidth = 220;
export function ProfileBadge(_ref) {
  var fullname = _ref.fullname,
      picture = _ref.picture,
      jobClass = _ref.jobClass,
      companyName = _ref.companyName,
      workingPlace = _ref.workingPlace,
      orgunit = _ref.orgunit,
      payoffice = _ref.payoffice,
      employeeCode = _ref.employeeCode,
      contractCode = _ref.contractCode,
      dateOfBirth = _ref.dateOfBirth,
      typeOfContract = _ref.typeOfContract,
      phone = _ref.phone,
      mobile = _ref.mobile,
      email = _ref.email;
  var userPic = "/img/" + picture;
  return React.createElement(Grid, {
    container: true,
    id: "gridContainer",
    spacing: 2
  }, React.createElement(Grid, {
    id: "leftColumn"
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
  })), React.createElement(Grid, {
    item: true,
    md: 6,
    id: "mainColumn"
  }, React.createElement(Typography, {
    variant: "h4"
  }, fullname), React.createElement(Typography, {
    variant: "h5"
  }, jobClass), React.createElement("hr", null), React.createElement(Grid, {
    container: true,
    id: "mainColumnWrapper"
  }, React.createElement(Grid, {
    item: true,
    md: 6,
    id: "mainColumnLeft"
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(InlineIcon, {
    icon: cityIcon
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
  }, React.createElement(InlineIcon, {
    icon: homeMapMarkerIcon
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
  }, React.createElement(InlineIcon, {
    icon: sitemapIcon
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
  }, React.createElement(InlineIcon, {
    icon: creditCardMarkerIcon
  })), React.createElement(Box, {
    pr: 1
  }, payoffice))), " ", React.createElement(Grid, {
    item: true,
    md: 6,
    id: "mainColumnRight"
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(InlineIcon, {
    icon: fingerprintIcon
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
  }, React.createElement(InlineIcon, {
    icon: fileAccountIcon
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
  }, React.createElement(InlineIcon, {
    icon: accountPlusIcon
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
  }, React.createElement(InlineIcon, {
    icon: accountClockIcon
  })), React.createElement(Box, {
    pr: 1
  }, typeOfContract))), " "), " "), " ", React.createElement(Grid, {
    item: true,
    md: 2,
    id: "rightColumn"
  }, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    my: 1,
    className: "iconTextContainer"
  }, React.createElement(Box, {
    pr: 1
  }, React.createElement(InlineIcon, {
    icon: deskphoneIcon
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
  }, React.createElement(InlineIcon, {
    icon: cellphoneIphoneIcon
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
  }, React.createElement(InlineIcon, {
    icon: atIcon
  })), React.createElement(Box, null, email))), " ");
} // ProfileBadge.defaultProps = {
//   fullname: '',
//   picture: '',
//   jobClass: '',
//   companyName: '',
//   workingPlace: '',
//   orgunit: '',
//   payoffice: '',
//   employeeCode: '',
//   contractCode: '',
//   dateOfBirth: '',
//   typeOfContract: '',
//   phone: '',
//   mobile: '',
//   email: ''
// };