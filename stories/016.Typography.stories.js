import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { SBHr } from "../components/SBHr";
export default {
  title: "OW Design System|Base-Elements/Typography",
  component: Typography
};
export var owTypographyStory = function owTypographyStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "Typography"), React.createElement("h2", null, "Displays a button due to a global Material UI CUSTOM theme"), React.createElement("p", null, "The default Typography is affected by the Material UI GlobalTheme"), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement("b", null, "subtitle1"), React.createElement(Typography, {
    variant: "subtitle1",
    gutterBottom: true
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"), React.createElement(SBHr, null), React.createElement("b", null, "body1"), React.createElement(Typography, {
    variant: "body1",
    gutterBottom: true
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."), React.createElement(SBHr, null), React.createElement("b", null, "body2"), React.createElement(Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."), React.createElement(SBHr, null), React.createElement("b", null, "Button text"), React.createElement(Typography, {
    variant: "button",
    display: "block",
    gutterBottom: true
  }, "Click here"), React.createElement(SBHr, null), React.createElement("b", null, "caption text"), React.createElement(Typography, {
    variant: "caption",
    display: "block",
    gutterBottom: true
  }, "Have you ever seen a caption?")));
};
owTypographyStory.story = {
  name: "Typography"
};