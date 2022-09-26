"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignWorkflow = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssignWorkflow = function AssignWorkflow(props) {
  var workflowData = props.workflowData,
      onAssign = props.onAssign,
      onCancel = props.onCancel;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "assign-workflow"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "workflow-modal-title"
  }, " Assign Workflow"), /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-x-lg preview-close-button",
    onClick: onCancel
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "workflow-assign-details"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "workflow-details"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "worflow-title"
  }, workflowData.name), /*#__PURE__*/_react.default.createElement("p", {
    className: "worflow-label"
  }, "Steps: ", workflowData.steps.length), /*#__PURE__*/_react.default.createElement("p", {
    className: "worflow-label"
  }, "Author: ", workflowData.author)), /*#__PURE__*/_react.default.createElement("div", {
    className: "workflow-assignees"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "worflow-assign-label"
  }, "Assign To "), /*#__PURE__*/_react.default.createElement("select", {
    className: "select-user-picker"
  }, /*#__PURE__*/_react.default.createElement("option", null, "Steve"), /*#__PURE__*/_react.default.createElement("option", null, "John"), /*#__PURE__*/_react.default.createElement("option", null, "Dave")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "workflow-actions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "assign-workflow-action",
    onClick: onAssign
  }, "Assign"), /*#__PURE__*/_react.default.createElement("button", {
    className: "assign-workflow-cancel",
    onClick: onCancel
  }, "Cancel")));
};

exports.AssignWorkflow = AssignWorkflow;