"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var no_important_1 = require("aphrodite/no-important");
var styles_1 = __importDefault(require("./styles"));
var ToastType;
(function (ToastType) {
    ToastType["SUCCESS"] = "success";
    ToastType["WARN"] = "warning";
    ToastType["ERROR"] = "danger";
    ToastType["INFO"] = "info";
})(ToastType = exports.ToastType || (exports.ToastType = {}));
var Toast = function (_a) {
    var title = _a.title, description = _a.description, type = _a.type, onClose = _a.onClose;
    return (react_1.default.createElement("div", { key: "Toast", className: no_important_1.css(styles_1.default.container, styles_1.default[type]) },
        react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.header) },
            react_1.default.createElement("strong", null, title),
            react_1.default.createElement("button", { "data-testid": "close-toast-btn", className: no_important_1.css(styles_1.default.button), onClick: onClose },
                react_1.default.createElement("small", null, "x"))),
        react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.body) }, description)));
};
exports.default = react_1.memo(Toast);
//# sourceMappingURL=Toast.js.map