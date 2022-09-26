"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkflowForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ai = require("react-icons/ai");

var _io = require("react-icons/io5");

var _AppContext = require("./AppContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WorkflowForm = function WorkflowForm(props) {
  var _appState$selectedNod;

  var onHide = props.onHide;

  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      appState = _useContext.appState,
      setAppState = _useContext.setAppState;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  (0, _react.useEffect)(function () {
    setFormData(_objectSpread(_objectSpread({}, appState[appState.selectedNode]), {}, {
      wfName: appState.workflowName,
      wfDesc: appState.workflowDesc,
      wfAuthor: appState.workflowAuthor
    }));
  }, [appState.selectedNode]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "h3 font-big m-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 text-left"
  }, "Workflow Name", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    value: formData.wfName || "",
    onChange: function onChange(e) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        wfName: e.target.value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 text-left"
  }, "Workflow Description", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    value: formData.wfDesc || "",
    onChange: function onChange(e) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        wfDesc: e.target.value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3  text-left"
  }, "Author", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    value: formData.author || "",
    onChange: function onChange(e) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        author: e.target.value
      }));
    }
  })), (appState === null || appState === void 0 ? void 0 : appState.selectedNode) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 text-left"
  }, "Step Type: ", (_appState$selectedNod = appState.selectedNode.split(" ")) === null || _appState$selectedNod === void 0 ? void 0 : _appState$selectedNod[0]), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 text-left"
  }, "Current Step Name", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    value: formData.nodeName || "",
    onChange: function onChange(e) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        nodeName: e.target.value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 text-left"
  }, "Step Description", /*#__PURE__*/_react.default.createElement("textarea", {
    type: "text",
    className: "form-control",
    value: formData.nodeDesc || "",
    onChange: function onChange(e) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        nodeDesc: e.target.value
      }));
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3 text-left"
  }, "Additional URLs", /*#__PURE__*/_react.default.createElement("input", {
    type: "url",
    className: "form-control",
    value: formData.url || "",
    onChange: function onChange(e) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        url: e.target.value
      }));
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary m-3",
    onClick: onHide,
    title: "close workflow"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-x-lg m-4 font-size-large"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary",
    title: "save workflow",
    onClick: function onClick() {
      var _objectSpread2;

      setAppState(_objectSpread(_objectSpread({}, appState), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, appState.selectedNode, formData), _defineProperty(_objectSpread2, "workflowName", formData.wfName), _defineProperty(_objectSpread2, "workflowAuthor", formData.wfAuthor), _defineProperty(_objectSpread2, "workflowDesc", formData.wfDesc), _defineProperty(_objectSpread2, "selectedNode", null), _objectSpread2)));
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-check2 m-4 font-size-large"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary m-3",
    title: "create workflow",
    onClick: function onClick() {
      setAppState(_objectSpread(_objectSpread({}, appState), {}, {
        workflowData: [].concat(_toConsumableArray(appState.workflowData), [{
          name: formData.wfName,
          description: formData.wfDesc,
          id: appState.workflowData.length + 2,
          author: formData.author,
          steps: [{}]
        }])
      }));
      onHide();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-diagram-3 m-4 font-size-large"
  }))));
};

exports.WorkflowForm = WorkflowForm;