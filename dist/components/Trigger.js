"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Trigger = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppContext = require("./AppContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Trigger = function Trigger() {
  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      triggersListData = _useContext.appState.triggersData,
      setAppState = _useContext.setAppState;

  var triggerHeaderView = function triggerHeaderView() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "trigger-header"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-header-title"
    }, " S.No. "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-header-title"
    }, " Name "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-header-title"
    }, " Completed "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-header-title"
    }, " AssignedTo "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-header-title"
    }, " Status "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-header-title"
    }, " Action "));
  };

  var triggerItemView = function triggerItemView(index, trigger) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "trigger-row"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-row-title"
    }, " ", index, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-row-title"
    }, " ", trigger.name, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-row-title"
    }, " ", "Step ".concat(trigger.currentStep, " of ").concat(trigger.totalSteps, " completed."), " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-row-title"
    }, " ", trigger.assignedTo, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-row-title ".concat(trigger.status === "Done" ? "trigger-completed" : "trigger-progress")
    }, " ", trigger.status, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "trigger-row-title trigger-row-action"
    }, " ", trigger.status === "Done" ? "Review" : "Remind"));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "trigger-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "trigger-table"
  }, triggerHeaderView(), triggersListData.map(function (triggerData, index) {
    return triggerItemView(index + 1, triggerData);
  })));
};

exports.Trigger = Trigger;