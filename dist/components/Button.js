"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn"
  }, "Hi ", props.label);
}
var _default = Button;
exports.default = _default;