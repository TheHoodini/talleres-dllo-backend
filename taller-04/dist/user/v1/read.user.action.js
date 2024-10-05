"use strict";

const fs = require("fs");
const path = require("path");

// DECLARE ACTION FUNCTION
async function readUserAction() {
    try {
        const filePath = path.join(__dirname, '23-taller-04-datos.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading user data:", error);
        throw error;
    }
}

// EXPORT ACTION FUNCTION
module.exports = readUserAction;
