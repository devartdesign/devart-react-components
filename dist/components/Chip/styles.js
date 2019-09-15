"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("devart-utils/dist/models/general");
exports.default = no_important_1.StyleSheet.create({
    container: {
        cursor: 'pointer',
        color: 'rgba(0, 0, 0, 0.87)',
        border: 'none',
        height: '32px',
        display: 'inline-flex',
        outline: '0',
        padding: '0',
        fontSize: '0.8125rem',
        boxSizing: 'border-box',
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        alignItems: 'center',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        whiteSpace: 'nowrap',
        borderRadius: '16px',
        verticalAlign: 'middle',
        justifyContent: 'center',
        textDecoration: 'none',
        backgroundColor: '#e0e0e0',
        marginRight: 5
    },
    label: {
        cursor: 'inherit',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        paddingLeft: 12,
        paddingRight: 12,
    },
    labelWithIcon: {
        paddingRight: 0
    },
    icon: {
        fill: general_1.Color.PRIMARY,
        margin: '0 10px 0 5px'
    }
});
//# sourceMappingURL=styles.js.map