"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
exports.default = no_important_1.StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinner: {
        display: 'inline-block',
        verticalAlign: 'text-bottom',
        borderStyle: 'solid',
        borderRadius: '50%',
        animationName: {
            from: {
                transform: 'rotate(0)'
            },
            to: {
                transform: 'rotate(359deg)'
            }
        },
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    }
});
//# sourceMappingURL=styles.js.map