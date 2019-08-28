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
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 25 : _b, _c = _a.color, color = _c === void 0 ? '#333333' : _c;
    return (react_1.default.createElement("div", { key: "Spinner", className: no_important_1.css(styles_1.default.container) },
        react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.spinner), style: { width: size, height: size, borderWidth: Math.min(Math.round(size / 6), 5), borderColor: color, borderRightColor: 'transparent' } })));
};
exports.default = react_1.memo(Spinner);
//# sourceMappingURL=Spinner.js.map