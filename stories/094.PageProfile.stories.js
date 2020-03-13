import React from "react";
import { action } from "@storybook/addon-actions";
import Grid from "@material-ui/core/Grid";
import { PageBase } from "../components/PageBase";
import { OwTabs } from "../components/OwTabs";
import { ProfileBadgeAvatar } from "../components/ProfileBadgeAvatar";
import { ProfileBadgeContacts } from "../components/ProfileBadgeContacts";
import { BirthCard } from "../components/BirthCard";
import { CodesCard } from "../components/CodesCard";
import { NameCard } from "../components/NameCard";
export default {
  title: "OW Design System|Page Base/Page Base Profile",
  component: PageBase
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

var contractList = new Array({
  contractCode: "000000001",
  companyName: "company 1",
  jobClass: "mansion 1"
}, {
  contractCode: "000000002",
  companyName: "company 2",
  jobClass: "mansion 2"
}, {
  contractCode: "000000003",
  companyName: "company 3",
  jobClass: "mansion 3"
});
var fullname = "Pali fullname";
var picture = "pali_avatar.jpg";
var companyName = "Pali Kft";
var workingPlace = "In that city";
var orgunit = "Org. Unit 123";
var payoffice = "Pay office A";
var employeeCode = "0000000017";
var contractCode = "000000002";
var dateOfBirth = "2020.05.30";
var typeOfContract = "Part time";
var jobClass = "HR asszisztens";
var phone = "+36 30 256 895";
var mobile = "+36 30 4896 587";
var email = "pali@orgware.hu";
var myNameCard = React.createElement(NameCard, {
  title: "Employee name",
  employeeCode: employeeCode,
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
  title: "Employee codes",
  employeeCode: employeeCode,
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
  title: "Employee birth data",
  employeeCode: employeeCode,
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
  label: " Elérhetőségek",
  component: React.createElement(React.Fragment, null, myNameCard, myBirthCard, myCodesCard)
}, {
  label: "Személyes adatok",
  component: React.createElement(React.Fragment, null)
}, {
  label: "Bérlap",
  component: React.createElement(React.Fragment, null)
}];
export var PageProfileStory = function PageProfileStory() {
  return React.createElement(React.Fragment, null, React.createElement(PageBase, {
    accessControl: null,
    fullname: "Pint\xE9r P\xE1l",
    picture: "pali_avatar.jpg",
    contractList: contractList,
    contractCodeSel: contractList[2].contractCode,
    onContractSel: fakeFunction
  }, React.createElement(Grid, {
    container: true,
    spacing: 2
  }, React.createElement(Grid, {
    item: true,
    md: 3,
    id: "colLeft"
  }, React.createElement(ProfileBadgeAvatar, {
    fullname: fullname,
    picture: picture,
    companyName: companyName,
    workingPlace: workingPlace,
    orgunit: orgunit,
    payoffice: payoffice,
    employeeCode: employeeCode,
    contractCode: contractCode,
    dateOfBirth: dateOfBirth,
    typeOfContract: typeOfContract
  })), React.createElement(Grid, {
    item: true,
    md: 9,
    id: "colRight"
  }, React.createElement(ProfileBadgeContacts, {
    fullname: fullname,
    jobClass: jobClass,
    phone: phone,
    mobile: mobile,
    email: email
  }), React.createElement(OwTabs, {
    itemsAr: itemsAr
  })))));
};
PageProfileStory.story = {
  name: "Page Base Profile"
};