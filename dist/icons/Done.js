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
var DoneIcon = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 24 : _b, _c = _a.height, height = _c === void 0 ? 24 : _c, className = _a.className;
    return (react_1.default.createElement("svg", { key: "DoneIcon", className: className, xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 24 24" },
        react_1.default.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
        react_1.default.createElement("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })));
};
exports.default = react_1.memo(DoneIcon);
//# sourceMappingURL=Done.js.map