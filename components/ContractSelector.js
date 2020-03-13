import _slicedToArray from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"; // import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { color, owContractSelectorTheme } from "../shared/styles";
var useStyles = makeStyles(function (theme) {
  return {
    contractControl: {
      border: "none",
      width: "100%",
      zIndex: 1
    },
    contractLabelControl: {
      backgroundColor: color.lightest,
      color: color.dark,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      left: theme.spacing(2),
      top: "calc(".concat(theme.spacing(1), " * -1px)"),
      zIndex: 2
    },
    contractSelectControl: {
      backgroundColor: color.lightest,
      fontSize: "smaller",
      color: color.darkest,
      border: "none"
    },
    input: {
      padding: "14px"
    }
  };
});
export function ContractSelector(_ref) {
  var contractList = _ref.contractList,
      contractCodeSel = _ref.contractCodeSel,
      onContractSel = _ref.onContractSel;
  var classes = useStyles();

  var _useState = useState(contractCodeSel),
      _useState2 = _slicedToArray(_useState, 2),
      contractCode = _useState2[0],
      setContractCode = _useState2[1];

  var handleContractChange = function handleContractChange(e) {
    setContractCode(e.target.value);
    onContractSel();
  };

  if (contractList && contractList.length > 1) {
    return React.createElement(ThemeProvider, {
      theme: owContractSelectorTheme
    }, React.createElement(FormControl, {
      className: classes.contractControl
    }, React.createElement(Select, {
      id: "contractCode",
      defaultValue: contractCode,
      onChange: handleContractChange,
      autoWidth: true,
      fullWidth: true,
      variant: "outlined",
      className: classes.contractSelectControl,
      inputProps: {
        classes: {
          // root,select,filled,outlined,selectMenu,disabled,icon,iconOpen,iconFilled,iconOutlined
          // icon: classes.icon,
          root: classes.input
        }
      }
    }, contractList.map(function (contract) {
      return React.createElement(MenuItem, {
        value: contract.contractCode,
        key: contract.contractCode
      }, contract.companyName, " - ", contract.jobClass);
    }))));
  } else {
    return React.createElement(React.Fragment, null);
  }
}
ContractSelector.defaultProps = {};