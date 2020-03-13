import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { OwTextField } from "../components/OwTextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
export default {
  title: "OW Design System|Base-Elements/Text field",
  component: OwTextField
};
export var owTextFieldStory = function owTextFieldStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "OwTextField"), React.createElement("h2", null, "Displays the form elements in OW style"), React.createElement("p", null, "The OwTextField can be displayed with a label and an icon"), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(Box, {
    mb: 3
  }, "Text field, for the properties, see the Material UI", " ", React.createElement("a", {
    href: "https://material-ui.com/components/text-fields/",
    target: "_blank"
  }, "documentation")), React.createElement(OwTextField, {
    id: "username",
    name: "username",
    label: "Username",
    required: true,
    value: "pali_username",
    onChange: function onChange(e) {
      return action("field action change");
    },
    InputProps: {
      endAdornment: React.createElement(InputAdornment, {
        position: "end"
      }, React.createElement(PersonOutlinedIcon, {
        color: "action"
      }))
    }
  })));
};
owTextFieldStory.story = {
  name: "Text field"
};