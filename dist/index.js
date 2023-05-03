"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);var _goober = require('goober');_goober.setup.call(void 0, _react2.default.createElement);var s=_goober.styled.call(void 0, "button")`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`,p= exports.Button =({title:o,className:r=""})=>_react2.default.createElement(s,{className:r,onClick:()=>alert(new Date)},o);exports.Button = p;
//# sourceMappingURL=index.js.map