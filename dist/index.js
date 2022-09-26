"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

var _EasyKT = require("./components/EasyKT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = _client.default.createRoot(document.getElementById("root"));

root.render( /*#__PURE__*/_react.default.createElement(_EasyKT.EasyKT, null));