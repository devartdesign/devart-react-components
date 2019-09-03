"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, info) {
        var Logger = this.props.Logger;
        /* istanbul ignore else */
        if (Logger.error)
            Logger.error('ErrorBoundary: ', error, info);
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, children = _a.children, fallback = _a.fallback;
        var hasError = this.state.hasError;
        return hasError ? fallback : children;
    };
    ErrorBoundary.defaultProps = {
        Logger: null,
        children: null,
        fallback: null
    };
    ErrorBoundary.getDerivedStateFromError = function (error) { return ({ hasError: true }); };
    return ErrorBoundary;
}(react_1.default.PureComponent));
exports.default = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map