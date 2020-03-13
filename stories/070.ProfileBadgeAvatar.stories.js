import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { ProfileBadgeAvatar } from "../components/ProfileBadgeAvatar";
export default {
  title: "OW Design System|Profile/Profile Badge Avatar",
  component: ProfileBadgeAvatar
};

function fakeFunction() {
  return action("fakeFunction invoked");
}

export var profileBadgeAvatarStory = function profileBadgeAvatarStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: '#eee'
    }
  }, React.createElement("h1", null, "Profile badge with Avatar"), React.createElement("h2", null, "Basic employee data"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(ProfileBadgeAvatar, {
    fullname: "Ifj. P\xE9lda M\xE1ria \xC9va",
    picture: "pali_avatar.jpg",
    companyName: "companyName",
    workingPlace: "workingPlace",
    orgunit: "orgunit",
    payoffice: "payoffice",
    employeeCode: "employeeCode",
    contractCode: "contractCode",
    dateOfBirth: "dateOfBirth",
    typeOfContract: "typeOfContract"
  })));
};
profileBadgeAvatarStory.story = {
  name: "Profile Badge Avatar"
};