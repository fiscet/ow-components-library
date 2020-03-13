import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { OwLogo } from "../components/OwLogo";
import { OwIconLogo } from "../components/OwIconLogo";
export default {
  title: "OW Design System|Base-Elements/OW Logos",
  component: [OwLogo, OwIconLogo]
};
export var owLogosStory = function owLogosStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "OwLogo"), React.createElement("h2", null, "Displays the OW Logo"), React.createElement("p", null, "The OwLogo can be displayed in a colored or in a transparent version"), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement("div", null, "OW Logo transparent"), React.createElement("div", {
    style: {
      backgroundColor: "#ccc"
    }
  }, React.createElement(OwLogo, {
    type: "transparent"
  })), React.createElement(SBHr, null), React.createElement("div", null, "OW Logo colored"), React.createElement(OwLogo, {
    type: "colored"
  }), React.createElement(SBHr, null), React.createElement("div", null, "OW Icon Logo transparent"), React.createElement("div", {
    style: {
      backgroundColor: "#ccc",
      padding: "10px"
    }
  }, React.createElement(OwIconLogo, {
    type: "transparent"
  })), React.createElement(SBHr, null), React.createElement("div", null, "OW Icon Logo colored"), React.createElement(OwIconLogo, {
    type: "colored"
  })));
};
owLogosStory.story = {
  name: "OW Logos"
};