"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateWorkflow = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateWorkflow = function CreateWorkflow(props) {
  var onHide = props.onHide;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "create-workflow-container",
    id: "create-workflow"
  });
};

exports.CreateWorkflow = CreateWorkflow;