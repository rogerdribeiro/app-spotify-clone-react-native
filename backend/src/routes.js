const express = require("express");
const routes = express.Router();
const UserController = require("./app/controllers/AlbumController");
const SongController = require("./app/controllers/SongController");

routes.post("/albums", UserController.store);
routes.get("/albums", UserController.index);
routes.delete("/albums", UserController.deleteAll);

routes.post("/songs", SongController.store);
routes.get("/songs", SongController.index);
routes.delete("/songs", SongController.deleteAll);

module.exports = routes;
