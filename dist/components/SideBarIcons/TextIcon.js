"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIcons = require("react-icons");

var _fc = require("react-icons/fc");

var _io = require("react-icons/io5");

var _reactConnectorTool = require("react-connector-tool");

var _AppContext = require("../AppContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Text = function Text(props) {
  var uniqueid = props.uniqueid,
      connectorContext = props.connectorContext,
      dragDropContext = props.dragDropContext;

  var _useContext = (0, _react.useContext)(_AppContext.AppContext),
      appState = _useContext.appState,
      setAppState = _useContext.setAppState;

  var onDragStart = function onDragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 iconCss m-4"
  }, /*#__PURE__*/_react.default.createElement(_io.IoTextOutline, {
    value: {
      color: "green",
      size: "100em"
    },
    id: "sidebar-rectangle",
    onClick: function onClick(event) {
      console.log("Rectangle Clicked ");
      setAppState(_objectSpread(_objectSpread({}, appState), {}, {
        selectedNode: "Wiki ".concat(uniqueid)
      }));
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "connector-point connector-left",
    id: "connector-left"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "connector-point connector-right",
    connector: "true",
    draggable: "true",
    id: "connector-right"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "iconLabel"
  }, "Text"), /*#__PURE__*/_react.default.createElement(_reactConnectorTool.ReactConnectorStart, {
    connectorContext: connectorContext,
    uniqueid: uniqueid
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "right-connector"
  })), /*#__PURE__*/_react.default.createElement(_reactConnectorTool.ReactConnectorEnd, {
    selector: "create-workflow",
    connectorContext: connectorContext,
    uniqueid: uniqueid
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-connector"
  })));
};

exports.Text = Text;