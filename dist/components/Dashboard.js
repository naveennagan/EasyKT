"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dashboard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppContext = require("./AppContext");

var _DashboardTabs = require("./DashboardTabs");

var _SearchBot = require("./search-bot/SearchBot");

var _SmartConverter = require("./smart-converter/SmartConverter");

var _Task = require("./Task");

var _Trigger = require("./Trigger");

var _Workflow = require("./Workflow");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dashboard = function Dashboard(props) {
  var _useState = (0, _react.useState)("Workflow"),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      appState = _useContext.appState,
      setAppState = _useContext.setAppState;

  var dragDropContext = props.dragDropContext,
      connectorContext = props.connectorContext;

  var getTabContentView = function getTabContentView() {
    switch (tab) {
      case "Workflow":
        {
          return /*#__PURE__*/_react.default.createElement(_Workflow.Workflow, {
            dragDropContext: dragDropContext,
            connectorContext: connectorContext
          });
        }

      case "Trigger":
        {
          return /*#__PURE__*/_react.default.createElement(_Trigger.Trigger, null);
        }

      case "Task":
        {
          return /*#__PURE__*/_react.default.createElement(_Task.Task, null);
        }

      case "SearchBot":
        {
          return /*#__PURE__*/_react.default.createElement(_SearchBot.SearchBot, null);
        }

      case "SmartConverter":
        {
          return /*#__PURE__*/_react.default.createElement(_SmartConverter.SmartConverter, null);
        }

      default:
        {
          return /*#__PURE__*/_react.default.createElement(_Workflow.Workflow, {
            dragDropContext: dragDropContext
          });
        }
    }
  };

  var selectTab = function selectTab(tab) {
    setTab(tab);
    setAppState(_objectSpread(_objectSpread({}, appState), {}, {
      currentTab: tab
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "ek-dashboard"
  }, /*#__PURE__*/_react.default.createElement(_DashboardTabs.DashBoardTabs, {
    onTabSelect: selectTab,
    tab: tab
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-container"
  }, getTabContentView())));
};

exports.Dashboard = Dashboard;