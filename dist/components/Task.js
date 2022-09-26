"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppContext = require("./AppContext");

var _Modal = _interopRequireDefault(require("./Modal"));

var _taskPreview = _interopRequireDefault(require("./task-preview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Task = function Task() {
  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      tasksListData = _useContext.appState.tasksData,
      setAppState = _useContext.setAppState;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedTask = _useState4[0],
      setSelectedTask = _useState4[1];

  var openTaskPreview = function openTaskPreview(task) {
    setSelectedTask(task);
    setShow(true);
  };

  var taskHeaderView = function taskHeaderView() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "task-header"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "task-header-title"
    }, " S.No. "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-header-title"
    }, " Name "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-header-title"
    }, " Completed "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-header-title"
    }, " TriggeredBy "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-header-title"
    }, " Status "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-header-title"
    }, " Action "));
  };

  var taskItemView = function taskItemView(index, task) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "task-row"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "task-row-title"
    }, " ", index, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-row-title"
    }, " ", task.name, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-row-title"
    }, " ", "Step ".concat(task.currentStep, " of ").concat(task.totalSteps, " completed."), " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-row-title"
    }, " ", task.triggeredBy, " "), /*#__PURE__*/_react.default.createElement("p", {
      className: "task-row-title ".concat(task.status === "Done" ? "task-completed" : "task-progress")
    }, " ", task.status, " "), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "task-row-title task-row-action",
      onClick: function onClick() {
        return openTaskPreview(task);
      }
    }, " ", task.status === "Done" ? "Review" : "Resume"));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "task-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "task-table"
  }, taskHeaderView(), tasksListData.map(function (taskData, index) {
    return taskItemView(index + 1, taskData);
  }))), show && /*#__PURE__*/_react.default.createElement(_Modal.default, {
    style: {
      content: {
        inset: "100px",
        padding: "0px"
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_taskPreview.default, {
    task: selectedTask,
    setShow: setShow
  })));
};

exports.Task = Task;