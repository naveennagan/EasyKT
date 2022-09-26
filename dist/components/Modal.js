"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomModal = function CustomModal(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/_react.default.createElement(_reactModal.default, {
    isOpen: true,
    style: style
  }, children);
};

var _default = CustomModal;
exports.default = _default;