import React from "react";
import { OwCard } from "./OwCard";
export function CodesCard(_ref) {
  var title = _ref.title,
      employeeCode = _ref.employeeCode,
      taxNumberLabel = _ref.taxNumberLabel,
      socialSecurityNumberLabel = _ref.socialSecurityNumberLabel,
      identityCardNumberLabel = _ref.identityCardNumberLabel,
      nationalityLabel = _ref.nationalityLabel,
      taxNumber = _ref.taxNumber,
      socialSecurityNumber = _ref.socialSecurityNumber,
      identityCardNumber = _ref.identityCardNumber,
      nationality = _ref.nationality,
      canInsert = _ref.canInsert,
      canEdit = _ref.canEdit,
      canDelete = _ref.canDelete,
      onInsert = _ref.onInsert,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete;
  var myData = [{
    key: taxNumberLabel,
    label: taxNumberLabel,
    value: taxNumber
  }, {
    key: socialSecurityNumberLabel,
    label: socialSecurityNumberLabel,
    value: socialSecurityNumber
  }, {
    key: identityCardNumberLabel,
    label: identityCardNumberLabel,
    value: identityCardNumber
  }, {
    key: nationalityLabel,
    label: nationalityLabel,
    value: nationality
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
CodesCard.defaultProps = {
  title: "Kódolt azonosítók",
  taxNumberLabel: "Adóazonosító",
  socialSecurityNumberLabel: "TAJ",
  identityCardNumberLabel: "SZIG",
  nationalityLabel: "Állampolgárság",
  canInsert: true,
  canEdit: true,
  canDelete: true
};