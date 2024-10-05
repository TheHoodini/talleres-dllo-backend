"use strict";

const readUserAction = require("./read.user.action");

// DECLARE CONTROLLER FUNCTIONS
async function readUsers() {
    try {
        const users = await readUserAction();
        return users;
    } catch (error) {
        console.error("Error reading users:", error);
        throw error;
    }
}

module.exports = { readUsers };
