import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { ForgotPwdForm } from "../components/ForgotPwdForm";
export default {
  title: "OW Design System|Auth/Forgot password Form",
  component: ForgotPwdForm
};

function fakeFunction() {
  return action("fakeFunction invoked");
}

export var forgotPwdFormStory = function forgotPwdFormStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "Forgot Password Form"), React.createElement("h2", null, "Displays a complete, ready to use, component for requiring a new password"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(ForgotPwdForm, {
    onSubmit: fakeFunction,
    onFormSent: fakeFunction
  })));
};
forgotPwdFormStory.story = {
  name: "Forgot password Form"
};