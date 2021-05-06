"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var constants_1 = require("../../constants");
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
        color: constants_1.STYLE.COLOR.DARK_GRAY,
        backgroundColor: '#e9e9e9',
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
        color: constants_1.STYLE.COLOR.WHITE
    },
    success: {
        backgroundColor: constants_1.STYLE.COLOR.GREEN
    },
    warning: {
        backgroundColor: constants_1.STYLE.COLOR.FAVORITE
    },
    info: {
        backgroundColor: constants_1.STYLE.COLOR.SECONDARY
    },
    danger: {
        backgroundColor: constants_1.STYLE.COLOR.NONARY
    }
});
//# sourceMappingURL=styles.js.map