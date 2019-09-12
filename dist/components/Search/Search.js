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
var icons_1 = require("../../icons");
var styles_1 = __importDefault(require("./styles"));
var Search = function (_a) {
    var onSearch = _a.onSearch;
    var _b = react_1.useState(''), state = _b[0], setState = _b[1];
    var handleChange = react_1.useCallback(function (event) {
        event.preventDefault();
        setState(event.target.value);
    }, []);
    react_1.useEffect(function () {
        if (state.length > 0)
            onSearch(state);
    }, [onSearch, state]);
    return (react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.search) },
        react_1.default.createElement("div", { className: no_important_1.css(styles_1.default.searchIcon) },
            react_1.default.createElement(icons_1.SearchIcon, null)),
        react_1.default.createElement("input", { type: "text", name: "search", placeholder: "Search\u2026", value: state, onChange: handleChange })));
};
exports.default = react_1.memo(Search);
//# sourceMappingURL=Search.js.map