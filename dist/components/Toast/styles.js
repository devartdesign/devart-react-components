"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var utils_1 = require("opya-utils/dist/utils");
var general_1 = require("opya-utils/dist/models/general");
exports.default = no_important_1.StyleSheet.create({
    container: {
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,.1)',
        boxShadow: '0 4px 12px rgba(0,0,0,.1)',
        borderRadius: 4,
        maxWidth: 300,
        minWidth: 300,
        backgroundClip: 'padding-box'
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px 12px',
        borderBottom: '1px solid rgba(0,0,0,.05)',
        lineHeight: 1.8,
        textTransform: 'capitalize',
        color: general_1.Color.DARK_GRAY,
        backgroundColor: utils_1.hexToRgba(general_1.Color.WHITE, 85),
        backgroundClip: 'padding-box'
    },
    button: {
        appearance: 'none',
        padding: 0,
        paddingLeft: 10,
        border: 0,
        backgroundColor: 'transparent'
    },
    body: {
        padding: 12,
        textTransform: 'capitalize',
        color: general_1.Color.WHITE
    },
    success: {
        backgroundColor: general_1.Color.GREEN
    },
    warning: {
        backgroundColor: general_1.Color.FAVORITE
    },
    info: {
        backgroundColor: general_1.Color.SECONDARY
    },
    danger: {
        backgroundColor: general_1.Color.NONARY
    }
});
//# sourceMappingURL=styles.js.map