"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaginationRange = function (_a) {
    var from = _a.from, to = _a.to, _b = _a.step, step = _b === void 0 ? 1 : _b;
    var i = from;
    var rangeNumber = [];
    while (i <= to) {
        rangeNumber.push(i);
        i += step;
    }
    return rangeNumber;
};
//# sourceMappingURL=util.js.map