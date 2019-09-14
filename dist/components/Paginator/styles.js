"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
exports.default = no_important_1.StyleSheet.create({
    paginationNav: {
        display: 'flex',
        flexDirection: 'row',
        flexBasis: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pageLimiter: {
        display: 'flex',
        width: '60px',
        height: '30px',
        backgroundColor: '#fff',
        borderRadius: '3px',
        border: '1px solid #CCC'
    },
    navPagination: {
        display: 'flex',
        flexBasis: '100%',
        marginLeft: 4
    },
    pagination: {
        backgroundColor: '#FFF',
        padding: '0 10px',
        margin: '10px 0',
        display: 'flex',
        flexGrow: 1,
        listStyleType: 'none',
    },
    pageItem: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 25,
    },
    pageItemButton: {
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
        padding: '0',
        ':hover': {
            backgroundColor: '#546e7a',
            color: '#FFF',
        }
    },
    pageItemButtonActive: {
        cursor: 'pointer',
        border: 'none',
        backgroundColor: '#29434e',
        color: '#FFF',
        width: '100%',
        height: '100%',
        padding: '0',
        ':hover': {
            backgroundColor: '#fff',
            color: '#29434e',
        },
    },
});
//# sourceMappingURL=styles.js.map