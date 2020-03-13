import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { PageHeader } from "../components/PageHeader";
export default {
  title: "OW Design System|Page Base/Page Header",
  component: PageHeader
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
export var PageHeaderStory = function PageHeaderStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: '#eee'
    }
  }, React.createElement("h1", null, "Page Header"), React.createElement("h2", null, "Page Header with avatar and contract selector"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(PageHeader, {
    fullname: "Pali Employee",
    picture: "pali_avatar.jpg",
    contractList: contractList,
    contractCodeSel: contractList[1].contractCode,
    onContractSel: fakeFunction
  })));
};
PageHeaderStory.story = {
  name: "Page Header"
};