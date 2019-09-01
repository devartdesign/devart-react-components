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
var _a;
/* eslint-disable react/no-array-index-key */
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var OutlinedInput_1 = __importDefault(require("@material-ui/core/OutlinedInput"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var types_1 = require("../types");
var util_1 = require("./util");
require("./Pagination.scss");
var LEFT_PAGE = 'LEFT';
var RIGHT_PAGE = 'RIGHT';
var getButtonLink = function (params) { return (react_1.default.createElement("button", { type: "button", className: "page-link", "aria-label": "Next", onClick: params.onClick },
    !params.hideTick && (react_1.default.createElement("span", { "aria-hidden": "true" }, "\u00AB")),
    react_1.default.createElement("span", { className: "sr-only" }, params.text))); };
var getNavLink = function (params) { return (react_1.default.createElement(react_router_dom_1.NavLink, { to: "/page/" + params.page },
    react_1.default.createElement("span", { className: "sr-only" }, params.text))); };
var typeMap = (_a = {},
    _a[types_1.LinkType.LINK] = getButtonLink,
    _a[types_1.LinkType.BUTTON] = getNavLink,
    _a);
var Pagination = function (_a) {
    var _b = _a.pageLimit, pageLimit = _b === void 0 ? 1 : _b, _c = _a.pageNeighbours, pageNeighbours = _c === void 0 ? 0 : _c, _d = _a.totalRecords, totalRecords = _d === void 0 ? 0 : _d, _e = _a.query, query = _e === void 0 ? {} : _e, _f = _a.hidePaginationLimiter, hidePaginationLimiter = _f === void 0 ? false : _f, _g = _a.linkType, linkType = _g === void 0 ? types_1.LinkType.BUTTON : _g, render = _a.render, onPageChanged = _a.onPageChanged;
    var _h = react_1.useState({
        currentPage: 1,
        totalPages: 0,
        pageLimit: pageLimit,
        totalRecords: totalRecords,
        pageNeighbours: pageNeighbours
    }), state = _h[0], setState = _h[1];
    var gotoPage = react_1.useCallback(function (page) {
        var currentPage = Math.max(1, Math.min(page, state.totalPages));
        var paginationData = __assign({}, query, { currentPage: currentPage, totalPages: state.totalPages, pageLimit: state.pageLimit, totalRecords: state.totalRecords, pageNeighbours: state.pageNeighbours });
        setState(paginationData);
        onPageChanged(paginationData);
    }, [query, state, onPageChanged, setState]);
    var handleClick = react_1.useCallback(function (page) { return function (evt) {
        evt.preventDefault();
        gotoPage(page);
    }; }, [gotoPage]);
    var handleMoveLeft = react_1.useCallback(function (evt) {
        evt.preventDefault();
        gotoPage(state.currentPage - (state.pageNeighbours * 2) - 1);
    }, [state.currentPage, state.pageNeighbours, gotoPage]);
    var handleMoveRight = react_1.useCallback(function (evt) {
        evt.preventDefault();
        gotoPage(state.currentPage + (state.pageNeighbours * 2) + 1);
    }, [state.currentPage, state.pageNeighbours, gotoPage]);
    var setPageLimit = react_1.useCallback(function (evt) {
        evt.preventDefault();
        setState(function (prevState) { return (__assign({}, prevState, { pageLimit: Number(evt.target.value) })); });
        var totalPages = Math.ceil(state.totalRecords / state.pageLimit);
        setState(function (prevState) { return (__assign({}, prevState, { totalPages: totalPages })); });
        gotoPage(state.currentPage);
    }, [setState, gotoPage, state.totalRecords, state.currentPage, state.pageLimit]);
    var fetchPageNumbers = react_1.useCallback(function () {
        var totalNumbers = (state.pageNeighbours * 2) + 3;
        var totalBlocks = totalNumbers + 2;
        if (state.totalPages > totalBlocks) {
            var startPage = Math.max(2, state.currentPage - state.pageNeighbours);
            var endPage = Math.min(state.totalPages - 1, state.currentPage + state.pageNeighbours);
            var pages = util_1.createPaginationRange({ from: startPage, to: endPage });
            var hasLeftSpill = startPage > 2;
            var hasRightSpill = (state.totalPages - endPage) > 1;
            var spillOffset = totalNumbers - (pages.length + 1);
            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    var extraPages = util_1.createPaginationRange({ from: startPage - spillOffset, to: startPage - 1 });
                    pages = [LEFT_PAGE].concat(extraPages, pages);
                    break;
                }
                case (!hasLeftSpill && hasRightSpill): {
                    var extraPages = util_1.createPaginationRange({ from: endPage + 1, to: endPage + spillOffset });
                    pages = pages.concat(extraPages, [RIGHT_PAGE]);
                    break;
                }
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE].concat(pages, [RIGHT_PAGE]);
                    break;
                }
            }
            return [1].concat(pages, [state.totalPages]);
        }
        return util_1.createPaginationRange({ from: 1, to: state.totalPages });
    }, [state.totalPages, state.pageNeighbours, state.currentPage]);
    var paginationPages = react_1.useMemo(function () { return fetchPageNumbers(); }, [fetchPageNumbers]);
    react_1.useEffect(function () {
        var neighbours = Math.max(0, Math.min(state.pageNeighbours, 2));
        var totalPages = Math.ceil(totalRecords / state.pageLimit);
        setState(function (prevState) { return (__assign({}, prevState, { pageNeighbours: neighbours, totalPages: totalPages })); });
    }, [totalRecords, state.pageNeighbours, state.pageLimit, setState]);
    react_1.useEffect(function () {
        if (state.totalRecords > 0 && state.totalRecords !== totalRecords) {
            var totalPages_1 = Math.ceil(state.totalRecords / state.pageLimit);
            setState(function (prevState) { return (__assign({}, prevState, { totalPages: totalPages_1 })); });
            gotoPage(state.currentPage);
        }
    }, [state.currentPage, state.totalRecords, state.pageLimit, setState, gotoPage, totalRecords]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        render(state),
        react_1.default.createElement("div", { className: "pagination__nav" },
            !hidePaginationLimiter && (react_1.default.createElement(Select_1.default, { className: "pageLimiter", native: true, value: state.pageLimit, onChange: setPageLimit, input: (react_1.default.createElement(OutlinedInput_1.default, { name: "Limit", labelWidth: 0, id: "outlined-age-native-simple" })) },
                react_1.default.createElement("option", { value: 5 }, "5"),
                react_1.default.createElement("option", { value: 10 }, "10"),
                react_1.default.createElement("option", { value: 15 }, "15"),
                react_1.default.createElement("option", { value: 20 }, "20"),
                react_1.default.createElement("option", { value: 25 }, "25"))),
            (totalRecords > 0 && state.totalPages > 1) && (react_1.default.createElement("nav", { className: "nav-pagination", "aria-label": "nav-pagination" },
                react_1.default.createElement("ul", { className: "pagination" }, paginationPages.map(function (page, index) {
                    if (page === LEFT_PAGE) {
                        return (react_1.default.createElement("li", { key: index, className: "page-item" }, typeMap[linkType]({ text: 'Prev', onClick: handleMoveLeft, page: page })));
                    }
                    if (page === RIGHT_PAGE) {
                        return (react_1.default.createElement("li", { key: index, className: "page-item" }, typeMap[linkType]({ text: 'Prev', onClick: handleMoveRight, page: page })));
                    }
                    return (react_1.default.createElement("li", { key: index, className: "page-item" + (state.currentPage === page ? ' active' : '') }, typeMap[linkType]({ page: page, text: page, onClick: handleClick(page), hideTick: true })));
                })))))));
};
exports.default = react_1.memo(Pagination);
//# sourceMappingURL=Pagination.js.map