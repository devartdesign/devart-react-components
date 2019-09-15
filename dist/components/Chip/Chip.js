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
var Chip = function (_a) {
    var onClick = _a.onClick, label = _a.label, icon = _a.icon, className = _a.className;
    var Icon = icon;
    return (react_1.default.createElement("div", { role: "button", className: no_important_1.css(styles_1.default.container) + " " + className, onClick: onClick },
        react_1.default.createElement("span", { className: no_important_1.css(styles_1.default.label) }, label),
        icon && react_1.default.createElement(Icon, null)));
};
exports.default = react_1.memo(Chip);
//# sourceMappingURL=Chip.js.map