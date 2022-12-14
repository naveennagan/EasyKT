"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./TaskPreview.css");

var _taskData = require("../../data/taskData");

require("../../../node_modules/video-react/dist/video-react.css");

var _videoReact2 = require("video-react");

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ContentWindow = function ContentWindow(_ref) {
  var selectedStep = _ref.selectedStep,
      setShowCongratulations = _ref.setShowCongratulations;
  var _selectedStep$descrip = selectedStep.description,
      type = _selectedStep$descrip.type,
      data = _selectedStep$descrip.data;

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  if (type === _taskData.Type.Text) {
    var text = data.text;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-content"
    }, /*#__PURE__*/_react.default.createElement("td", null, (0, _htmlReactParser.default)(text)));
  }

  if (type === _taskData.Type.Quiz) {
    var question = data.question,
        options = data.options,
        answer = data.answer;

    var selectAnswer = function selectAnswer(text) {
      if (text === answer) {
        setResult("Correct");
        setShowCongratulations(true);
      } else {
        setResult("Wrong");
      }
    };

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-content"
    }, "Answer the following question to move forward", /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-quiz-question"
    }, /*#__PURE__*/_react.default.createElement("td", null, (0, _htmlReactParser.default)(question))), options.map(function (text, index) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        key: index,
        className: "preview-quiz-button ",
        onClick: function onClick() {
          selectAnswer(text);
        }
      }, index + 1, ". ", text));
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-quiz-result"
    }, "Result:", " ", /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: result === "Correct" ? "#007500" : "#ff0000"
      }
    }, result)));
  }

  if (type === _taskData.Type.Image) {
    var _text = data.text,
        link = data.link;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-content"
    }, /*#__PURE__*/_react.default.createElement("td", null, (0, _htmlReactParser.default)(_text)), /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: link
    })));
  }

  if (type === _taskData.Type.Video) {
    var _text2 = data.text,
        _link = data.link;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-content"
    }, /*#__PURE__*/_react.default.createElement("td", null, (0, _htmlReactParser.default)(_text2)), /*#__PURE__*/_react.default.createElement("div", {
      className: "preview-image"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "video-container"
    }, /*#__PURE__*/_react.default.createElement(_videoReact2.Player, {
      playsInline: true,
      src: _link
    }))));
  }
};

var _default = ContentWindow;
exports.default = _default;