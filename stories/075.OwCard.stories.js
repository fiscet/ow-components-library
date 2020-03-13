import React from "react"; // import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "@material-ui/core/styles";
import { owGlobalTheme } from "../shared/styles";
import Box from "@material-ui/core/Box";
import { SBHr } from "../components/SBHr";
import { OwCard } from "../components/OwCard";
export default {
  title: "OW Design System|Profile/OW Card",
  component: OwCard
};

function fakeFunction(e) {
  console.log("fake Function", e);
  return action("fakeFunction invoked");
}

var myData = [{
  key: 'how-are-you',
  label: 'How are you?',
  value: 'Very good, thanks'
}, {
  key: 'your-name',
  label: 'What\'s your name?',
  value: 'Pali'
}, {
  key: 'where-from',
  label: 'Where do you come from?',
  value: 'Albania'
}, {
  key: 'weather',
  label: 'What\'s the weather like?',
  value: 'Always sunny'
}];
export var codesCardStory = function codesCardStory() {
  return React.createElement(Box, {
    p: 3,
    style: {
      backgroundColor: "#eee"
    }
  }, React.createElement("h1", null, "OW Card"), React.createElement("h2", null, "Generic card with dynamic values"), React.createElement("p", null), React.createElement(SBHr, null), React.createElement(ThemeProvider, {
    theme: owGlobalTheme
  }, React.createElement(OwCard, {
    title: "Simply the best title",
    mainId: "0100110110",
    keyValueAr: myData,
    canInsert: true,
    canEdit: true,
    canDelete: true,
    onInsert: fakeFunction,
    onEdit: fakeFunction,
    onDelete: fakeFunction
  })));
};
codesCardStory.story = {
  name: "OW Card"
};