import React from "react";
import { OwCard } from "./OwCard";
export function NameCard(_ref) {
  var title = _ref.title,
      employeeCode = _ref.employeeCode,
      prefixNameLabel = _ref.prefixNameLabel,
      lastNameLabel = _ref.lastNameLabel,
      firstNameLabel = _ref.firstNameLabel,
      firstName2Label = _ref.firstName2Label,
      prefixName = _ref.prefixName,
      lastName = _ref.lastName,
      firstName = _ref.firstName,
      firstName2 = _ref.firstName2,
      canInsert = _ref.canInsert,
      canEdit = _ref.canEdit,
      canDelete = _ref.canDelete,
      onInsert = _ref.onInsert,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete;
  var myData = [{
    key: prefixNameLabel,
    label: prefixNameLabel,
    value: prefixName
  }, {
    key: lastNameLabel,
    label: lastNameLabel,
    value: lastName
  }, {
    key: firstNameLabel,
    label: firstNameLabel,
    value: firstName
  }, {
    key: firstName2Label,
    label: firstName2Label,
    value: firstName2
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
NameCard.defaultProps = {
  title: "Név",
  prefixNameLabel: "Előnév",
  lastNameLabel: "Családnév",
  firstNameLabel: "Keresztnév",
  firstName2Label: "Keresztnév 2",
  canInsert: true,
  canEdit: true,
  canDelete: true
};