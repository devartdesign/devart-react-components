"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Pagination_1 = __importDefault(require("./Pagination"));
// import PaginationToolkit from './Toolkit';
var types_1 = require("./types");
require("./Paginator.scss");
var Paginator = function (_a) {
    var totalRecords = _a.totalRecords, _b = _a.pageLimit, pageLimit = _b === void 0 ? 1 : _b, _c = _a.pageNeighbours, pageNeighbours = _c === void 0 ? 2 : _c, _d = _a.linkType, linkType = _d === void 0 ? types_1.LinkType.BUTTON : _d, _e = _a.filterOptions, filterOptions = _e === void 0 ? [] : _e, _f = _a.hideColumnOptions, hideColumnOptions = _f === void 0 ? [] : _f, _g = _a.enableToolkit, enableToolkit = _g === void 0 ? false : _g, _h = _a.hidePaginationLimiter, hidePaginationLimiter = _h === void 0 ? false : _h, _j = _a.disableFilter, disableFilter = _j === void 0 ? false : _j, _k = _a.disableHideColumns, disableHideColumns = _k === void 0 ? false : _k, _l = _a.disableSearch, disableSearch = _l === void 0 ? false : _l, handleChange = _a.handleChange, children = _a.children;
    var _m = react_1.useState({}), query = _m[0], setQuery = _m[1];
    var onChange = react_1.useCallback(function (newQuery) {
        setQuery(function (prevQuery) { return (__assign({}, prevQuery, newQuery)); });
        handleChange(newQuery);
    }, [setQuery, handleChange]);
    return (react_1.default.createElement("div", { className: "paginator" },
        react_1.default.createElement(Pagination_1.default, { totalRecords: totalRecords, pageLimit: pageLimit, pageNeighbours: pageNeighbours, onPageChanged: onChange, query: query, hidePaginationLimiter: hidePaginationLimiter, linkType: linkType, render: function (paginationProps) { return (react_1.default.createElement(react_1.default.Fragment, null,
                enableToolkit && (react_1.default.createElement("div", null, "Toolkit")
                // <PaginationToolkit
                //   onChange={onChange}
                //   filterOptions={filterOptions}
                //   hideColumnOptions={hideColumnOptions}
                //   paginationProps={paginationProps}
                //   disableFilter={disableFilter}
                //   disableHideColumns={disableHideColumns}
                //   disableSearch={disableSearch}
                // />
                ),
                children)); } })));
};
exports.default = react_1.memo(Paginator);
//# sourceMappingURL=Paginator.js.map