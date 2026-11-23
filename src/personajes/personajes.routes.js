const personajesRouter = require("express").Router();
const { getPersonajes } = require("./personajes.controller");

personajesRouter.get("/", getPersonajes)

module.exports = personajesRouter;