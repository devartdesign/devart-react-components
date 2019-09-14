"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("devart-utils/dist/models/general");
exports.default = no_important_1.StyleSheet.create({
    search: {
        position: 'relative',
        width: '100%',
    },
    searchIcon: {
        width: 3 * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        fill: general_1.Color.PRIMARY
    },
    icon: {
        background: '../../assets/icons/search.svg'
    },
    input: {
        color: 'inherit',
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 3,
        paddingLeft: 33,
        width: '100%',
        borderRadius: 3,
        border: '1px solid #eee',
        fontSize: 14
        // transition: theme.transitions.create('width'),
    }
});
//# sourceMappingURL=styles.js.map