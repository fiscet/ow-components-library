import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { NameCard } from "../components/NameCard";
export default {
  title: "OW Design System|Profile/Name Card",
  component: NameCard
};

function fakeFunction(e) {
  console.log('fake Function', e);
  return action("fakeFunction invoked");
}

export var nameCardStory = function nameCardStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: '#eee'
    }
  }, React.createElement("h1", null, "Name card"), React.createElement("h2", null, "Employee name"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(NameCard, {
    title: "N\xE9v",
    employeeCode: "0000000017",
    prefixName: "Ifj.",
    lastName: "P\xE9lda",
    firstName: "M\xE1ria",
    firstName2: "\xC9va",
    onEdit: fakeFunction,
    onDelete: fakeFunction
  })));
};
nameCardStory.story = {
  name: "Name Card"
};