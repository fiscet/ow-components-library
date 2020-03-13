import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { ProfileBadgeContacts } from "../components/ProfileBadgeContacts";
export default {
  title: "OW Design System|Profile/Profile Badge Contacts",
  component: ProfileBadgeContacts
};

function fakeFunction() {
  return action("fakeFunction invoked");
}

export var profileBadgeContactsStory = function profileBadgeContactsStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: '#eee'
    }
  }, React.createElement("h1", null, "Profile badge"), React.createElement("h2", null, "Basic employee data: name, mansion, contacts"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(ProfileBadgeContacts, {
    fullname: "Ifj. P\xE9lda M\xE1ria \xC9va",
    jobClass: "HR igazgat\xF3",
    phone: "phone",
    mobile: "mobile",
    email: "email"
  })));
};
profileBadgeContactsStory.story = {
  name: "Profile Badge Contacts"
};