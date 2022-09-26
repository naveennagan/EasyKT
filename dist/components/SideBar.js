"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactConnectorTool = require("react-connector-tool");

var _reactDragDropTool = require("react-drag-drop-tool");

var _ImageIcon = require("./SideBarIcons/ImageIcon");

var _VideoIcon = require("./SideBarIcons/VideoIcon");

var _TeamsIcon = require("./SideBarIcons/TeamsIcon");

var _QuizIcon = require("./SideBarIcons/QuizIcon");

var _ApprovalIcon = require("./SideBarIcons/ApprovalIcon");

var _FeedbackIcon = require("./SideBarIcons/FeedbackIcon");

var _WikiIcon = require("./SideBarIcons/WikiIcon");

var _VoiceIcon = require("./SideBarIcons/VoiceIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(props) {
  var dragDropContext = props.dragDropContext,
      connectorContext = props.connectorContext;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ek-sidebar"
  }, /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "image-item"
  }, /*#__PURE__*/_react.default.createElement(_ImageIcon.Image, {
    uniqueid: "image-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "video-item"
  }, /*#__PURE__*/_react.default.createElement(_VideoIcon.Video, {
    uniqueid: "video-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "teams-item"
  }, /*#__PURE__*/_react.default.createElement(_TeamsIcon.Teams, {
    uniqueid: "teams-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "circle3-item"
  }, /*#__PURE__*/_react.default.createElement(_QuizIcon.Quiz, {
    uniqueid: "circle3-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "approval-item"
  }, /*#__PURE__*/_react.default.createElement(_ApprovalIcon.Approval, {
    uniqueid: "approval-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "feedback-item"
  }, /*#__PURE__*/_react.default.createElement(_FeedbackIcon.Feedback, {
    uniqueid: "feedback-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "wiki-item"
  }, /*#__PURE__*/_react.default.createElement(_WikiIcon.Wiki, {
    uniqueid: "wiki-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })), /*#__PURE__*/_react.default.createElement(_reactDragDropTool.ReactDraggable, {
    targetContext: dragDropContext,
    uniqueid: "voice-item"
  }, /*#__PURE__*/_react.default.createElement(_VoiceIcon.Voice, {
    uniqueid: "voice-item",
    connectorContext: connectorContext,
    dragDropContext: dragDropContext
  })));
};

exports.Sidebar = Sidebar;