import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { LoginForm } from "../components/LoginForm";
export default {
  title: "OW Design System|Auth/Login Form",
  component: LoginForm
};

function fakeFunction() {
  return action("fakeFunction invoked");
}

export var loginFormStory = function loginFormStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "LoginForm"), React.createElement("h2", null, "Displays a complete, ready to use, component for login"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(LoginForm, {
    onSubmit: fakeFunction,
    onFormSent: fakeFunction
  })));
};
loginFormStory.story = {
  name: "Login Form"
};