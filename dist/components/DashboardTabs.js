"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashBoardTabs = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DashBoardTabs = function DashBoardTabs(props) {
  var onTabSelect = props.onTabSelect,
      tab = props.tab;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard-tab-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard-tab ".concat(tab === "Workflow" ? "tab-selected" : "tab-not-selected"),
    onClick: function onClick() {
      onTabSelect("Workflow");
    }
  }, "Workflow"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard-tab ".concat(tab === "Trigger" ? "tab-selected" : "tab-not-selected"),
    onClick: function onClick() {
      onTabSelect("Trigger");
    }
  }, "Trigger"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard-tab ".concat(tab === "Task" ? "tab-selected" : "tab-not-selected"),
    onClick: function onClick() {
      onTabSelect("Task");
    }
  }, "Task"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard-tab ".concat(tab === "SearchBot" ? "tab-selected" : "tab-not-selected"),
    onClick: function onClick() {
      onTabSelect("SearchBot");
    }
  }, "Search Bot"), /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard-tab ".concat(tab === "SmartConverter" ? "tab-selected" : "tab-not-selected"),
    onClick: function onClick() {
      onTabSelect("SmartConverter");
    }
  }, "Smart Converter"));
};

exports.DashBoardTabs = DashBoardTabs;