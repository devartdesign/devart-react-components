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
var HamburgerIcon = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 24 : _b, _c = _a.height, height = _c === void 0 ? 24 : _c, className = _a.className;
    return (react_1.default.createElement("svg", { key: "HamburgerIcon", className: className, width: width, height: height, id: "Layer_1", version: "1.1", viewBox: "0 0 " + width + " " + height, xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { d: "M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" })));
};
exports.default = react_1.memo(HamburgerIcon);
//# sourceMappingURL=Hamburger.js.map