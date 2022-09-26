"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBot = void 0;

var _react = _interopRequireWildcard(require("react"));

var _workflowData = require("../../data/workflowData");

var _Pill = require("./Pill");

require("./SearchBot.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchBot = function SearchBot() {
  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      searchInput = _useState2[0],
      setSearchInput = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      searchResults = _useState4[0],
      setSearchResults = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      searchTitle = _useState6[0],
      setSearchTitle = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      suggestions = _useState8[0],
      setSuggestions = _useState8[1];

  (0, _react.useEffect)(function () {
    return updateSuggestions();
  }, [searchInput]);

  var updateSuggestions = function updateSuggestions() {
    var results = _workflowData.workflowData.reduce(function (acc, workflow) {
      if (workflow.name.toLowerCase().includes(searchInput.toLowerCase())) {
        acc.push(workflow.name);
      }

      return acc;
    }, []);

    setSuggestions(results);
  };

  var onInputChange = function onInputChange(e) {
    setSearchInput(e.target.value);
  };

  var onEnterPress = function onEnterPress(e) {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };

  var onSearchClick = function onSearchClick() {
    setSearchTitle(searchInput);
    setSearchInput("");
  };

  var onSearchClear = function onSearchClear() {
    setSearchTitle("");
    setSearchInput("");
    setSearchResults([]);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-bot row d-flex justify-content-center p-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card p-2"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "card-title"
  }, searchTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, "Search Results will be shown here")), /*#__PURE__*/_react.default.createElement("div", {
    className: "m-5 px-5 col"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "input-lg search-rounded px-4",
    type: "text",
    value: searchInput,
    onChange: onInputChange,
    onKeyUp: onEnterPress,
    placeholder: "Search for anything..."
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-search m-5 font-size-large",
    onClick: onSearchClick
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "bi bi-x-lg font-size-large",
    onClick: onSearchClear
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-bg-dark p-2"
  }, (suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(function (suggestion, index) {
    return /*#__PURE__*/_react.default.createElement(_Pill.Pill, {
      text: suggestion,
      onClick: function onClick() {
        return setSearchInput(suggestion);
      },
      key: index
    });
  })) || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " Search suggestion will be shown here"))));
};

exports.SearchBot = SearchBot;