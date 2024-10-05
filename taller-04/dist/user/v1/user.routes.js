"use strict";

const { Router } = require("express");
const { readUsers } = require("./user.controller");

// INIT ROUTES
const userRoutes = Router();
const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];

// DECLARE ENDPOINT FUNCTIONS

// Get all users
async function GetUsers(_request, response) {
    try {
        const users = await readUsers();
        response.status(200).json({
            message: "Success.",
            users
        });
    } catch (error) {
        response.status(500).json({
            message: "Error fetching users.",
            error
        });
    }
}

// Get users by hobby
async function GetUsersByHobby(request, response) {
    const { hobby } = request.query;
    if (!hobby) {
        return response.status(400).json({
            message: "Hobby is required."
        });
    }

    try {
        const users = await readUsers();
        const usersWithHobby = users.filter(user => user.hobbies.includes(hobby));
        response.status(200).json({
            message: `Users with hobby: ${hobby}`,
            users: usersWithHobby
        });
    } catch (error) {
        response.status(500).json({
            message: "Error fetching users.",
            error
        });
    }
}

// Check if user exists by ID
async function CheckUserExists(request, response) {
    const { id: userId } = request.query;
    if (!userId) {
        return response.status(400).json({
            message: "User ID is required."
        });
    }

    try {
        const users = await readUsers();
        const userExists = users.some(user => user.id === Number(userId));
        response.status(200).json({
            message: userExists ? "User exists." : "User does not exist.",
            exists: userExists
        });
    } catch (error) {
        response.status(500).json({
            message: "Error checking user existence.",
            error
        });
    }
}

// Get total experience for a team
async function GetTeamExperience(request, response) {
    const { team } = request.query;
    if (!team) {
        return response.status(400).json({
            message: "Team is required."
        });
    }

    try {
        const users = await readUsers();
        const teamUsers = users.filter(user => user.team === team);
        const totalExperience = teamUsers.reduce((acc, user) => acc + user.years, 0);
        response.status(200).json({
            message: `Total experience for team ${team}: ${totalExperience} years.`,
            totalExperience
        });
    } catch (error) {
        response.status(500).json({
            message: "Error fetching team experience.",
            error
        });
    }
}

// Get users by faction
async function GetUsersByFaction(request, response) {
    const { faction } = request.query;
    if (!faction) {
        return response.status(400).json({
            message: "Faction is required."
        });
    }

    try {
        const users = await readUsers();
        const usersByFaction = users.filter(user => user.faction === faction);
        response.status(200).json({
            message: `Users in faction: ${faction}`,
            users: usersByFaction
        });
    } catch (error) {
        response.status(500).json({
            message: "Error fetching users by faction.",
            error
        });
    }
}

// Register a new user
async function registerUser(request, response) {
    const { id, name, carrera } = request.body;
    if (!id || !name || !carrera) {
        return response.status(400).json({
            message: "All fields (id, name, carrera) are required."
        });
    }

    try {
        users.push({ id, name, carrera });
        response.status(201).json({
            message: "User registered successfully.",
            user: { id, name, carrera }
        });
    } catch (error) {
        response.status(500).json({
            message: "Error registering user.",
            error
        });
    }
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby);
userRoutes.get("/exists", CheckUserExists);
userRoutes.get("/team-experience", GetTeamExperience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", registerUser);

// EXPORT ROUTES
module.exports = userRoutes;
