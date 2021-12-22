const express=require("express");
const routes = express.Router();

routes.get("/", (request, response) => response.send("Yallah!Ihul!"))

module.exports = routes