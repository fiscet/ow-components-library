import React from "react";
import { action } from "@storybook/addon-actions";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { PageBase } from "../components/PageBase";
export default {
  title: "OW Design System|Page Base/Page Base empty",
  component: PageBase
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

var contractList = new Array({
  contractCode: "000000001",
  companyName: "company 1",
  jobClass: "mansion 1"
}, {
  contractCode: "000000002",
  companyName: "company 2",
  jobClass: "mansion 2"
}, {
  contractCode: "000000003",
  companyName: "company 3",
  jobClass: "mansion 3"
});
export var PageBaseStory = function PageBaseStory() {
  return React.createElement(React.Fragment, null, React.createElement(PageBase, {
    accessControl: null,
    fullname: "Pint\xE9r P\xE1l",
    picture: "pali_avatar.jpg",
    contractList: contractList,
    contractCodeSel: contractList[2].contractCode,
    onContractSel: fakeFunction
  }, React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: "#eee"
    }
  }, React.createElement(Box, null, React.createElement("h1", null, "Page Base"), React.createElement("h2", null, "Accessible only to authenticated users"), React.createElement("p", null), React.createElement(SBHr, null)))));
};
PageBaseStory.story = {
  name: "Page Base empty"
};