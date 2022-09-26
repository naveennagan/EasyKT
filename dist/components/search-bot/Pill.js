"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = void 0;

require("./SearchBot.css");

var Pill = function Pill(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-outline-info m-2 pill-transtition",
    onClick: onClick
  }, text);
};

exports.Pill = Pill;