import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { CodesCard } from "../components/CodesCard";
export default {
  title: "OW Design System|Profile/Codes Card",
  component: CodesCard
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

export var codesCardStory = function codesCardStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: "#eee"
    }
  }, React.createElement("h1", null, "Codes card"), React.createElement("h2", null, "Employee doc codes"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(CodesCard, {
    title: "K\xF3dolt azonos\xEDt\xF3k",
    employeeCode: "0000000017",
    taxNumber: "7509274081",
    socialSecurityNumber: "24455041",
    identityCardNumber: "501032AB",
    nationality: "Magyar",
    onEdit: fakeFunction,
    onDelete: fakeFunction
  })));
};
codesCardStory.story = {
  name: "Codes Card"
};