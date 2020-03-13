import React from 'react';
import Typography from '@material-ui/core/Typography';
/**
 * @param  {string} payoffText - the text to view on, also with html tags
 */

export function Payoff(_ref) {
  var payoffText = _ref.payoffText;
  return React.createElement(Typography, {
    variant: "h3",
    component: "h1",
    style: {
      color: '#fff'
    },
    align: "left",
    dangerouslySetInnerHTML: {
      __html: payoffText
    }
  });
}