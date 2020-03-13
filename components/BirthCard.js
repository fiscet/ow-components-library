import React from "react";
import { OwCard } from "./OwCard";
export function BirthCard(_ref) {
  var title = _ref.title,
      employeeCode = _ref.employeeCode,
      birthDateLabel = _ref.birthDateLabel,
      birthCountryLabel = _ref.birthCountryLabel,
      motherNameLabel = _ref.motherNameLabel,
      birthPlaceLabel = _ref.birthPlaceLabel,
      sexLabel = _ref.sexLabel,
      maritalStatusLabel = _ref.maritalStatusLabel,
      birthDate = _ref.birthDate,
      birthCountry = _ref.birthCountry,
      motherName = _ref.motherName,
      birthPlace = _ref.birthPlace,
      sex = _ref.sex,
      maritalStatus = _ref.maritalStatus,
      canInsert = _ref.canInsert,
      canEdit = _ref.canEdit,
      canDelete = _ref.canDelete,
      onInsert = _ref.onInsert,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete;
  var myData = [{
    key: birthDateLabel,
    label: birthDateLabel,
    value: birthDate
  }, {
    key: birthCountryLabel,
    label: birthCountryLabel,
    value: birthCountry
  }, {
    key: motherNameLabel,
    label: motherNameLabel,
    value: motherName
  }, {
    key: birthPlaceLabel,
    label: birthPlaceLabel,
    value: birthPlace
  }, {
    key: sexLabel,
    label: sexLabel,
    value: sex
  }, {
    key: maritalStatusLabel,
    label: maritalStatusLabel,
    value: maritalStatus
  }];
  return React.createElement(OwCard, {
    title: title,
    mainId: employeeCode,
    keyValueAr: myData,
    canInsert: canInsert,
    canEdit: canEdit,
    canDelete: canDelete,
    onInsert: onInsert,
    onEdit: onEdit,
    onDelete: onDelete
  });
}
BirthCard.defaultProps = {
  title: "Természetes azonosítók",
  birthDateLabel: "Születési dátum",
  birthCountryLabel: "Születési ország",
  motherNameLabel: "Anyja neve",
  birthPlaceLabel: "Születési hely",
  sexLabel: "Neme",
  maritalStatusLabel: "Családi állapot",
  canInsert: true,
  canEdit: true,
  canDelete: true
};