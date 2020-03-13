import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { BirthCard } from "../components/BirthCard";
export default {
  title: "OW Design System|Profile/Birth Card",
  component: BirthCard
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

export var birthCardStory = function birthCardStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: "#eee"
    }
  }, React.createElement("h1", null, "Birth card"), React.createElement("h2", null, "Employee birth data"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(BirthCard, {
    title: "Term\xE9szetes azonos\xEDt\xF3k",
    employeeCode: "0000000017",
    birthDate: "1900-02-03",
    birthCountry: "Magyarorszag",
    motherName: "Az anyad",
    birthPlace: "Budapest",
    sex: "T",
    maritalStatus: "Szingli",
    onEdit: fakeFunction,
    onDelete: fakeFunction
  })));
};
birthCardStory.story = {
  name: "Birth Card"
};