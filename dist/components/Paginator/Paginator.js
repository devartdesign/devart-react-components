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
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var types_1 = require("./types");
var util_1 = require("./util");
require("./Pagination.scss");
var LEFT_PAGE = 'LEFT';
var RIGHT_PAGE = 'RIGHT';
var PaginationButtonLink = function (params) { return (react_1.default.createElement("button", { type: "button", className: "page-link", "aria-label": "Next", onClick: params.onClick },
    !params.hideTick && (react_1.default.createElement("span", { "aria-hidden": "true" }, "\u00AB")),
    react_1.default.createElement("span", null, params.text))); };
var PaginationNavLink = function (params) { return (react_1.default.createElement(react_router_dom_1.NavLink, { to: "/page/" + params.page },
    react_1.default.createElement("span", null, params.text))); };
var typeMap = (_a = {},
    _a[types_1.LinkType.LINK] = PaginationNavLink,
    _a[types_1.LinkType.BUTTON] = PaginationButtonLink,
    _a);
var Pagination = function (_a) {
    var _b = _a.pageLimit, pageLimit = _b === void 0 ? 1 : _b, _c = _a.pageNeighbours, pageNeighbours = _c === void 0 ? 0 : _c, _d = _a.totalRecords, totalRecords = _d === void 0 ? 0 : _d, _e = _a.hidePaginationLimiter, hidePaginationLimiter = _e === void 0 ? false : _e, _f = _a.linkType, linkType = _f === void 0 ? types_1.LinkType.BUTTON : _f, onPageChanged = _a.onPageChanged, children = _a.children;
    var _g = react_1.useState(function () { return ({
        currentPage: 1,
        lastPage: 1,
        totalPages: 0,
        pageLimit: pageLimit,
        totalRecords: totalRecords,
        pageNeighbours: pageNeighbours
    }); }), state = _g[0], setState = _g[1];
    var gotoPage = react_1.useCallback(function (props) {
        var currentPage = Math.max(1, Math.min(props.page, props.totalPages));
        onPageChanged({ page: currentPage, limit: props.pageLimit });
    }, [onPageChanged]);
    var handleClick = react_1.useCallback(function (currentPage) { return function (evt) {
        evt.preventDefault();
        setState(function (prevProps) { return (__assign({}, prevProps, { currentPage: currentPage, lastPage: prevProps.currentPage })); });
    }; }, []);
    var handleMoveLeft = react_1.useCallback(function (evt) {
        evt.preventDefault();
        setState(function (prevProps) { return (__assign({}, prevProps, { lastPage: prevProps.currentPage, currentPage: state.currentPage - (state.pageNeighbours * 2) - 1 })); });
    }, [state.currentPage, state.pageNeighbours]);
    var handleMoveRight = react_1.useCallback(function (evt) {
        evt.preventDefault();
        setState(function (prevProps) { return (__assign({}, prevProps, { lastPage: prevProps.currentPage, currentPage: state.currentPage + (state.pageNeighbours * 2) + 1 })); });
    }, [state.currentPage, state.pageNeighbours]);
    var setPageLimit = react_1.useCallback(function (evt) {
        evt.preventDefault();
        evt.persist();
        setState(function (prevProps) { return (__assign({}, prevProps, { pageLimit: Number(evt.target.value), lastPage: prevProps.currentPage })); });
    }, [setState]);
    var calculatedPages = react_1.useMemo(function () {
        if (totalRecords > 0) {
            return { neighbours: Math.max(0, Math.min(state.pageNeighbours, 2)), totalPages: Math.ceil(totalRecords / state.pageLimit), totalRecords: totalRecords };
        }
        return { neighbours: pageNeighbours, totalPages: 0, totalRecords: totalRecords };
    }, [totalRecords, state.pageLimit, pageNeighbours]); // eslint-disable-line
    var paginationPages = react_1.useMemo(function () {
        var neighbours = calculatedPages.neighbours, totalPages = calculatedPages.totalPages;
        var totalNumbers = (neighbours * 2) + 3;
        var totalBlocks = totalNumbers + 2;
        if (totalPages > totalBlocks) {
            var startPage = Math.max(2, state.currentPage - neighbours);
            var endPage = Math.min(totalPages - 1, state.currentPage + neighbours);
            var pages = util_1.createPaginationRange({ from: startPage, to: endPage });
            var hasLeftSpill = startPage > 2;
            var hasRightSpill = (totalPages - endPage) > 1;
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
            return [1].concat(pages, [totalPages]);
        }
        return util_1.createPaginationRange({ from: 1, to: totalPages });
    }, [calculatedPages, state.currentPage]);
    react_1.useEffect(function () {
        if ((totalRecords > 0 && totalRecords !== calculatedPages.totalRecords) || pageLimit !== state.pageLimit || state.currentPage !== state.lastPage) {
            gotoPage(__assign({ page: state.currentPage, pageLimit: state.pageLimit }, calculatedPages));
        }
    }, [setState, totalRecords, calculatedPages, state]); // eslint-disable-line
    return (react_1.default.createElement(react_1.default.Fragment, null,
        children,
        react_1.default.createElement("div", { className: "pagination__nav" },
            !hidePaginationLimiter && (react_1.default.createElement("select", { className: "pageLimiter", value: state.pageLimit, onChange: setPageLimit },
                react_1.default.createElement("option", { value: 1 }, "1"),
                react_1.default.createElement("option", { value: 5 }, "5"),
                react_1.default.createElement("option", { value: 10 }, "10"),
                react_1.default.createElement("option", { value: 15 }, "15"),
                react_1.default.createElement("option", { value: 20 }, "20"),
                react_1.default.createElement("option", { value: 25 }, "25"))),
            (totalRecords > 0 && calculatedPages.totalPages > 1) && (react_1.default.createElement("nav", { className: "nav-pagination", "aria-label": "nav-pagination" },
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
//# sourceMappingURL=Paginator.js.map