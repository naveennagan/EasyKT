"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./TaskPreview.css");

var QueryWindow = function QueryWindow(_ref) {
  var value = _ref.value,
      onValueChange = _ref.onValueChange,
      onSubmitQuery = _ref.onSubmitQuery,
      setShowQuery = _ref.setShowQuery;
  return /*#__PURE__*/React.createElement("div", {
    className: "preview-query-view"
  }, "You can type your query here", /*#__PURE__*/React.createElement("textarea", {
    style: {
      width: '100%',
      color: '#464EB8'
    },
    value: value,
    onChange: function onChange(event) {
      return onValueChange(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-help-button-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "preview-query-button",
    onClick: function onClick() {
      setShowQuery(false);
      onSubmitQuery();
      onValueChange('');
    }
  }, "Submit"), /*#__PURE__*/React.createElement("button", {
    className: "preview-query-button",
    onClick: function onClick() {
      setShowQuery(false);
      onValueChange('');
    }
  }, "Cancel")));
};

var _default = QueryWindow;
exports.default = _default;