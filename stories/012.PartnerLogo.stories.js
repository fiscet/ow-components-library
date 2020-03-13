import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { PartnerLogo } from "../components/PartnerLogo";
export default {
  title: "OW Design System|Base-Elements/Partner Logo",
  component: PartnerLogo
};
export var partnerLogoStory = function partnerLogoStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "PartnerLogo"), React.createElement("h2", null, "Displays the Partner Logo"), React.createElement("p", null, "The PartnerLogo can be displayed in a colored (OW Red) container or in a grey one"), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement("b", null, "transparent"), React.createElement("div", {
    style: {
      backgroundColor: "#ccc"
    }
  }, React.createElement(PartnerLogo, {
    type: "transparent"
  })), React.createElement(SBHr, null), React.createElement("b", null, "colored"), React.createElement(PartnerLogo, {
    type: "colored"
  })));
};
partnerLogoStory.story = {
  name: "Partner Logo"
};