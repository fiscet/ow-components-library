import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { OwButton } from "../components/OwButton";
export default {
  title: "OW Design System|Base-Elements/Buttons",
  component: OwButton
};
export var allButtonsStory = function allButtonsStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "OwButton"), React.createElement("h2", null, "Displays a button due to a global Material UI CUSTOM theme"), React.createElement("p", null, "The default OwButton is a basic Material button variant=\"contained\" color=\"primary\". The colors, the font are inherited from OW global custom theme."), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(OwButton, {
    text: "Default",
    controlType: "default",
    onClick: action("button action click")
  }), React.createElement(SBHr, null), React.createElement(OwButton, {
    text: "Primary",
    controlType: "primary",
    onClick: action("button action click")
  }), React.createElement(SBHr, null), React.createElement(OwButton, {
    text: "Secondary",
    controlType: "secondary",
    onClick: action("button action click")
  }), React.createElement(SBHr, null), React.createElement(OwButton, {
    text: "Warning",
    controlType: "warning",
    onClick: action("button action click")
  })));
};
allButtonsStory.story = {
  name: "Buttons"
};