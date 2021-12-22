const express=require("express");
const routes = express.Router();

const MemoryController = require("./controllers/MemoryController")
const MemoryMiddleware = require("./middlewares/MemoryMiddleware")


routes.get("/memories", MemoryController.index)

routes.post("/memories", MemoryController.store)

routes.put("/memories/:id", MemoryMiddleware.validateId, MemoryController.update)

routes.delete("/memories/:id", MemoryMiddleware.validateId, MemoryController.delete)




module.exports = routes