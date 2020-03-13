import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { OwTitle } from "../components/OwTitle";
export default {
  title: "OW Design System|Base-Elements/Titles",
  component: OwTitle
};
export var allTitlesStory = function allTitlesStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "OwTitle"), React.createElement("h2", null, "All the text used with our global Material UI CUSTOM theme"), React.createElement("p", null, "The default OwTitle is a basic Typography with binded variant. The colors, the font are inherited from OW global custom theme."), React.createElement("p", null, "You can choose one of the usual title tags: h1, h2, ..., h6"), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement("b", null, "h1"), " ", React.createElement(OwTitle, {
    variant: "h1"
  }), React.createElement(SBHr, null), React.createElement("b", null, "h2"), " ", React.createElement(OwTitle, {
    variant: "h2"
  }), React.createElement(SBHr, null), React.createElement("b", null, "h3"), " ", React.createElement(OwTitle, {
    variant: "h3"
  }), React.createElement(SBHr, null), React.createElement("b", null, "h4"), " ", React.createElement(OwTitle, {
    variant: "h4"
  }), React.createElement(SBHr, null), React.createElement("b", null, "h5"), " ", React.createElement(OwTitle, {
    variant: "h5"
  }), React.createElement(SBHr, null), React.createElement("b", null, "h6"), " ", React.createElement(OwTitle, {
    variant: "h6"
  })));
};
allTitlesStory.story = {
  name: "Titles"
};