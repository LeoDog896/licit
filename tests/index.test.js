"use strict";
function typed(value) {
    return value;
}
const database = {
    x: typed([]),
    y: typed([]),
};
const defaultPermissions = {
    admin: false,
    createX: false,
    updateX: false,
    deleteX: false,
    createY: false,
    updateY: false,
    deleteY: false,
};
function user(username, permissions = {}) {
    return {
        username,
        permissions: {
            ...defaultPermissions,
            ...permissions,
        },
    };
}
