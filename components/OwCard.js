import _regeneratorRuntime from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/regenerator";
import _asyncToGenerator from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { color } from "../shared/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { OwTextField } from "./OwTextField";
import { OwButton } from "./OwButton";
import { OwIcon } from "./OwIcon";
import dotsVerticalIcon from "@iconify/icons-mdi/dots-vertical";
import PencilIcon from "@iconify/icons-mdi/pencil";
import DeleteIcon from "@iconify/icons-mdi/delete";
import PlusThickIcon from "@iconify/icons-mdi/plus-thick";
var useStyles = makeStyles(function (theme) {
  return {
    hidden: {
      display: "none"
    },
    root: {
      backgroundColor: color.lightest,
      marginBottom: theme.spacing(2)
    },
    header: {
      padding: "2px 24px",
      borderBottom: "2px solid ".concat(color.medium),
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    action: {
      margin: 0
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      width: "480px",
      backgroundColor: color.lightest,
      border: "1px solid " + color.lightest,
      borderRadius: "8px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});
/**
 * @param  {string} title
 * @param  {string} mainId
 * @param  {array} keyValueAr
 * @param  {bool} canInsert
 * @param  {bool} canEdit
 * @param  {bool} canDelete
 * @param  {function} onInsert
 * @param  {function} onEdit
 * @param  {string} btText
 */

export function OwCard(_ref) {
  var title = _ref.title,
      mainId = _ref.mainId,
      keyValueAr = _ref.keyValueAr,
      canInsert = _ref.canInsert,
      canEdit = _ref.canEdit,
      canDelete = _ref.canDelete,
      onInsert = _ref.onInsert,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      btText = _ref.btText;
  var classes = useStyles();
  /** Action (context) menu */

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleBtActionsClick = function handleBtActionsClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleActionsClose = function handleActionsClose() {
    setAnchorEl(null);
  };

  var handleDelete = function handleDelete() {
    onDelete(mainId);
    handleActionsClose();
  };

  var btInsertClass = canInsert ? "flex" : classes.hidden;
  var btEditClass = canEdit ? "flex" : classes.hidden;
  var btDeleteClass = canDelete ? "flex" : classes.hidden;
  /** Modal ... */

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return React.createElement(Card, {
    elevation: 0,
    className: classes.root
  }, React.createElement(CardHeader, {
    title: title,
    className: classes.header,
    classes: {
      action: classes.action
    },
    titleTypographyProps: {
      variant: "h6",
      padding: "0",
      margin: "0"
    },
    action: React.createElement("div", null, React.createElement(IconButton, {
      "aria-label": "Actions",
      onClick: handleBtActionsClick
    }, React.createElement(OwIcon, {
      iconifyIcon: dotsVerticalIcon
    })), React.createElement(Menu, {
      id: "context-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleActionsClose
    }, React.createElement(MenuItem, {
      className: btInsertClass,
      onClick: handleOpen
    }, React.createElement(ListItemIcon, null, React.createElement(OwIcon, {
      iconifyIcon: PlusThickIcon
    })), React.createElement(ListItemText, {
      primary: "Insert"
    })), React.createElement(MenuItem, {
      className: btEditClass,
      onClick: handleOpen
    }, React.createElement(ListItemIcon, null, React.createElement(OwIcon, {
      iconifyIcon: PencilIcon
    })), React.createElement(ListItemText, {
      primary: "Edit"
    })), React.createElement(MenuItem, {
      className: btDeleteClass,
      onClick: handleDelete
    }, React.createElement(ListItemIcon, null, React.createElement(OwIcon, {
      iconifyIcon: DeleteIcon
    })), React.createElement(ListItemText, {
      primary: "Delete"
    }))), React.createElement(Modal, {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      className: classes.modal,
      open: open,
      onClose: handleClose,
      closeAfterTransition: true,
      BackdropComponent: Backdrop,
      BackdropProps: {
        timeout: 500
      }
    }, React.createElement(Fade, {
      in: open
    }, React.createElement("div", {
      id: "editForm",
      className: classes.paper
    }, React.createElement(Typography, {
      variant: "h6"
    }, "Actions"), React.createElement("form", {
      className: classes.form,
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(e) {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  e.stopPropagation();
                  onEdit(keyValueAr);
                  handleClose();
                  handleActionsClose();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    }, keyValueAr.map(function (item) {
      return React.createElement(OwTextField, {
        id: item.key,
        name: item.key,
        label: item.label,
        value: item.value,
        onChange: function onChange(e) {
          return item.value = e.target.value;
        }
      });
    }), React.createElement(OwButton, {
      type: "submit",
      fullWidth: true,
      text: btText,
      controlType: "primary",
      className: classes.submit
    }))))))
  }), React.createElement(CardContent, null, React.createElement(Box, {
    p: 2
  }, keyValueAr.map(function (item) {
    return React.createElement(Grid, {
      container: true,
      spacing: 1
    }, React.createElement(Grid, {
      item: true,
      xs: 3
    }, React.createElement(Typography, {
      variant: "caption"
    }, item.label)), React.createElement(Grid, {
      item: true,
      xs: 9
    }, React.createElement(Typography, {
      variant: "body2"
    }, item.value)));
  }))));
}
OwCard.defaultProps = {
  canInsert: false,
  canEdit: true,
  canDelete: false,
  btText: "OK"
};