import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { OwTabs } from "../components/OwTabs";
import { NameCard } from "../components/NameCard";
import { BirthCard } from "../components/BirthCard";
import { CodesCard } from "../components/CodesCard";
export default {
  title: "OW Design System|Profile/Profile Tabs",
  component: OwTabs
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

var myNameCard = React.createElement(NameCard, {
  title: "My Title",
  employeeCode: "Code",
  prefixNameLabel: "Prefix",
  lastNameLabel: "Lastname",
  firstNameLabel: "Firstname",
  firstName2Label: "Firstname2",
  prefixName: "mrs",
  lastName: "Pelda",
  firstName: "Maria",
  firstName2: "Paline",
  canEdit: true,
  canDelete: true,
  onEdit: fakeFunction,
  onDelete: fakeFunction
});
var myCodesCard = React.createElement(CodesCard, {
  taxNumberLabel: "Tax code",
  socialSecurityNumberLabel: "TAJ code",
  identityCardNumberLabel: "IC number",
  nationalityLabel: "Nationality",
  taxNumber: "1548413654",
  socialSecurityNumber: "754754745",
  identityCardNumber: "xasc5a44564",
  nationality: "Nigerian"
});
var myBirthCard = React.createElement(BirthCard, {
  title: "My Title",
  employeeCode: "Code",
  birthDateLabel: "Birth date",
  birthCountryLabel: "Birth Country",
  motherNameLabel: "Mother Name",
  birthPlaceLabel: "Birth Place",
  sexLabel: "Sex",
  maritalStatusLabel: "Marital Status",
  birthDate: "1980.03.15",
  birthCountry: "Albania",
  motherName: "Pina neni",
  birthPlace: "Tirana",
  sex: "F",
  maritalStatus: "Always Free",
  canEdit: true,
  canDelete: true,
  onEdit: fakeFunction,
  onDelete: fakeFunction
});
var itemsAr = [{
  label: "Személyes adatok",
  component: myNameCard
}, {
  label: " Elérhetőségek",
  component: myCodesCard
}, {
  label: "Bérlap",
  component: myBirthCard
}];
export var PageNavStory = function PageNavStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: "#eee"
    }
  }, React.createElement(Box, null, React.createElement("h1", null, "OW Tabs"), React.createElement("h2", null, "TEMPORARY EXAMPLE with the only components available now"), React.createElement("p", null, React.createElement("i", null, "I know they are not coherent")), React.createElement(SBHr, null)), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(OwTabs, {
    itemsAr: itemsAr
  })));
};
PageNavStory.story = {
  name: "Profile Tabs"
};