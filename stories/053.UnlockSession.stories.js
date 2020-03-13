import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { UnlockSession } from "../components/UnlockSession";
export default {
  title: "OW Design System|Auth/Unlock Session",
  component: UnlockSession
};

function fakeFunction() {
  return action("fakeFunction invoked");
}

export var unlockSessionStory = function unlockSessionStory() {
  return React.createElement(Box, {
    p: 3
  }, React.createElement("h1", null, "Unlock Session"), React.createElement("h2", null, "Forced login modal when expires the session"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(UnlockSession, {
    username: "pali_username",
    fullname: "Pali Pali",
    picture: "pali_avatar.jpg",
    escapeUrl: "/login",
    onSubmit: fakeFunction,
    onFormSent: fakeFunction
  })));
};
unlockSessionStory.story = {
  name: "Unlock Session"
};