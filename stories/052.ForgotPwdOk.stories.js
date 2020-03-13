import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { ForgotPwdOk } from "../components/ForgotPwdOk";
export default {
  title: "OW Design System|Auth/Forgot password OK",
  component: ForgotPwdOk
};

function fakeFunction() {
  return action("fakeFunction invoked");
}

export var forgotPwdOkStory = function forgotPwdOkStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "Forgot Password OK"), React.createElement("h2", null, "Displays a modal response after having required a new password"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(ForgotPwdOk, {
    escapeUrl: "/login",
    showMe: true,
    onClose: fakeFunction
  })));
};
forgotPwdOkStory.story = {
  name: "Forgot password OK"
};