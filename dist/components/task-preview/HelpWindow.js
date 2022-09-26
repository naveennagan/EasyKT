"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./TaskPreview.css");

var HelpWindow = function HelpWindow(_ref) {
  var triggeredBy = _ref.triggeredBy,
      selectedStep = _ref.selectedStep,
      setShowHelp = _ref.setShowHelp;
  return /*#__PURE__*/React.createElement("div", {
    className: "preview-help-view"
  }, "You can reach out to the following people who have completed this step:", /*#__PURE__*/React.createElement("div", null, triggeredBy, " (Author)", /*#__PURE__*/React.createElement("a", {
    href: "https://teams.microsoft.com/",
    className: "bi bi-microsoft-teams preview-help-image",
    target: "_blank"
  })), selectedStep.completedBy.map(function (item) {
    return /*#__PURE__*/React.createElement("div", null, item, /*#__PURE__*/React.createElement("a", {
      href: "https://teams.microsoft.com/",
      className: "bi bi-microsoft-teams preview-help-image",
      target: "_blank"
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "preview-help-button-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "preview-help-button",
    onClick: function onClick() {
      return setShowHelp(false);
    }
  }, "OK")));
};

var _default = HelpWindow;
exports.default = _default;