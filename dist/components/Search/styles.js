"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var general_1 = require("devart-utils/dist/models/general");
exports.default = no_important_1.StyleSheet.create({
    search: {
        position: 'relative',
        borderRadius: 5,
        backgroundColor: general_1.Color.WHITE,
        '&:hover': {
            backgroundColor: general_1.Color.LIGHT_GRAY
        },
        marginLeft: 0,
        width: '100%',
    },
    searchIcon: {
        width: 3 * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        background: '../../assets/icons/search.svg'
    },
    input: {
        color: 'inherit',
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 3,
        paddingLeft: 3 * 10,
        width: '100%',
    }
});
//# sourceMappingURL=styles.js.map