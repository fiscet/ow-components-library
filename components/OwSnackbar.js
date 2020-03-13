import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
/**
 * Base Component for the Message Display
 * 
 * @component
 * return (
 *   <div className="messageDisplay">
 * )
 */

export function OwSnackbar(onClose) {
  /**
   * Snackbar visibile or not
   */
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];
  /**
  * The message object of type <SnackMessage>
  */


  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      msg = _useState4[0],
      setMsg = _useState4[1];
  /**
   * Prevents to close the snackbar when we click somewhere
   * 
   * @param {any} event - mouseEvent
   * @param {string} reason 
   */


  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    /** e.g. dispatch(setSnack(null)); */

    onclose();
  };

  function Transition(props) {
    return React.createElement(Slide, Object.assign({}, props, {
      direction: "down"
    }));
  }

  if (msg.message) {
    return React.createElement(Snackbar, {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      TransitionComponent: Transition,
      open: open,
      autoHideDuration: 3000,
      onClose: handleClose
    }, React.createElement(Alert, {
      onClose: handleClose,
      severity: msg.status
    }, msg.message));
  } else {
    return React.createElement(React.Fragment, null);
  }
}
;
OwSnackbar.defaultProps = {
  onClose: null
};