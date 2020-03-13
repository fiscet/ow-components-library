import _taggedTemplateLiteral from "C:\\Users\\Rong\\Documents\\components-library-chris\\ow-components-library\\node_modules\\@babel\\runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,500,500i,700,700i&amp;display=swap');\n\n  html {\n    height: 100%;\n    min-height: 100%;\n  }\n  body {\n    ", "\n\n    margin: 0;\n    overflow-y: auto;\n    overflow-x: auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"Muli\";\n  background-color: #fff;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  min-height: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle, css } from "styled-components";
export var bodyStyles = css(_templateObject());
export var GlobalStyle = createGlobalStyle(_templateObject2(), bodyStyles);