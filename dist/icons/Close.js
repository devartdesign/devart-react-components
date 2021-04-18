"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var CloseIcon = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 24 : _b, _c = _a.height, height = _c === void 0 ? 24 : _c, className = _a.className;
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", key: "CloseIcon", className: className, width: width, height: height, viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { d: "M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" })));
};
exports.default = react_1.memo(CloseIcon);
//# sourceMappingURL=Close.js.map