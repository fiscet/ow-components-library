import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { ContractSelector } from "../components/ContractSelector";
export default {
  title: "OW Design System|Page Base/Contract Selector",
  component: ContractSelector
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

var contractList = new Array({
  contractCode: '000000001',
  companyName: 'company 1',
  jobClass: 'mansion 1'
}, {
  contractCode: '000000002',
  companyName: 'company 2',
  jobClass: 'mansion 2'
}, {
  contractCode: '000000003',
  companyName: 'company 3',
  jobClass: 'mansion 3'
});
export var contractSelectorStory = function contractSelectorStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "Contract Selector"), React.createElement("h2", null, "Example of the contract drop down"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(ContractSelector, {
    contractList: contractList,
    contractCodeSel: contractList[1].contractCode,
    onContractSel: fakeFunction
  })));
};
contractSelectorStory.story = {
  name: "Contract Selector"
};