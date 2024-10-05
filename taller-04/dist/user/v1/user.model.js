"use strict";

const { Schema, model } = require("mongoose");

// MONGOOSE SCHEMA
const UserSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    hobbies: { type: [String], required: true },
    years: { type: Number, required: true },
    team: { type: String, required: true },
    faction: { type: String, required: true }
});

// MONGO MODEL
const UserModel = model("User", UserSchema);

module.exports = { UserSchema, UserModel };
