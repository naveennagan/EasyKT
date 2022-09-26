"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./TaskPreview.css");

var _Querywindow = _interopRequireDefault(require("./Querywindow"));

var _HelpWindow = _interopRequireDefault(require("./HelpWindow"));

var _taskData = require("../../data/taskData");

var _ContentWindow = _interopRequireDefault(require("./ContentWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getTaskStatus = function getTaskStatus(taskStatus, selectedStepCount, currentStepCount) {
  if (taskStatus === 'Done') {
    return _taskData.Status.Completed;
  }

  if (selectedStepCount < currentStepCount) {
    return _taskData.Status.Completed;
  } else if (selectedStepCount == currentStepCount) {
    return _taskData.Status.InProgress;
  } else {
    return _taskData.Status.Pending;
  }
};

var TaskPreview = function TaskPreview(_ref) {
  var task = _ref.task,
      setShow = _ref.setShow;
  var currentStepCount = task.currentStep,
      steps = task.steps,
      totalSteps = task.totalSteps,
      triggeredBy = task.triggeredBy,
      taskStatus = task.status;

  var _useState = (0, _react.useState)(currentStepCount),
      _useState2 = _slicedToArray(_useState, 2),
      selectedStepCount = _useState2[0],
      setSelectedStepCount = _useState2[1];

  var _useState3 = (0, _react.useState)(steps[selectedStepCount - 1]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedStep = _useState4[0],
      setSelectedStep = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showHelp = _useState6[0],
      setShowHelp = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showQuery = _useState8[0],
      setShowQuery = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      queryValue = _useState10[0],
      setQueryValue = _useState10[1];

  var _useState11 = (0, _react.useState)(_taskData.Status.Pending),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedStepStatus = _useState12[0],
      setSelectedStepStatus = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      showCongratulations = _useState14[0],
      setShowCongratulations = _useState14[1];

  (0, _react.useEffect)(function () {
    setSelectedStep(steps[selectedStepCount - 1]);
    setSelectedStepStatus(getTaskStatus(taskStatus, selectedStepCount, currentStepCount));
  }, [selectedStepCount]);

  var onPreviousClick = function onPreviousClick() {
    if (selectedStepCount > 1) {
      setSelectedStepCount(selectedStepCount - 1);
    }

    setShowHelp(false);
  };

  var onNextClick = function onNextClick() {
    if (selectedStepCount < totalSteps) {
      setSelectedStepCount(selectedStepCount + 1);
    }

    setShowHelp(false);
  };

  var onNeedHelpClick = function onNeedHelpClick() {
    //show the list of author and the persons who completed this step
    setShowHelp(!showHelp);
    setShowQuery(false);
  };

  var onAskQueryClick = function onAskQueryClick() {
    //allow user to write query
    setShowQuery(!showQuery);
    setShowHelp(false);
  };

  var _onSubmitQuery = function onSubmitQuery() {//make api request to post query
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-container"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-x-lg preview-close-button",
    onClick: function onClick() {
      return setShow(false);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-status-button"
  }, selectedStepStatus), /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-title-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-title"
  }, selectedStep.title)), /*#__PURE__*/_react.default.createElement(_ContentWindow.default, {
    selectedStep: selectedStep,
    setShowCongratulations: setShowCongratulations
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-footer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-arrow-left-square preview-footer-buttons",
    onClick: function onClick() {
      return onPreviousClick();
    }
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-arrow-right-square preview-footer-buttons",
    onClick: function onClick() {
      return onNextClick();
    }
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-question-square preview-footer-buttons",
    onClick: function onClick() {
      return onAskQueryClick();
    }
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-person-square preview-footer-buttons",
    onClick: function onClick() {
      return onNeedHelpClick();
    }
  })), showHelp && /*#__PURE__*/_react.default.createElement(_HelpWindow.default, {
    triggeredBy: triggeredBy,
    selectedStep: selectedStep,
    setShowHelp: setShowHelp
  }), showQuery && /*#__PURE__*/_react.default.createElement(_Querywindow.default, {
    value: queryValue,
    onValueChange: setQueryValue,
    onSubmitQuery: function onSubmitQuery() {
      return _onSubmitQuery();
    },
    setShowQuery: setShowQuery
  }), showCongratulations && /*#__PURE__*/_react.default.createElement("div", {
    className: "preview-congratulation"
  }, "Congratulations, you have completed the course !!", /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-trophy-fill preview-success-image"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "preview-help-button",
    onClick: function onClick() {
      return setShow(false);
    }
  }, "Thank You"))));
};

var _default = TaskPreview;
exports.default = _default;