import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { MainNav } from "../components/MainNav";
export default {
  title: "OW Design System|Page Base/Main Navigation",
  component: MainNav
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

export var PageNavStory = function PageNavStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: "#eee"
    }
  }, React.createElement(Box, {
    style: {
      marginLeft: '320px'
    }
  }, React.createElement("h1", null, "Main Navigation"), React.createElement("h2", null, "with Partner logo and menu"), React.createElement("p", null), React.createElement(SBHr, null)), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(MainNav, null)));
};
PageNavStory.story = {
  name: "Main Navigation"
};