const Album = require("../models/Album");

class AlbumController {
  async index(req, res) {
    const albums = await Album.find();
    return res.json(albums);
  }
  async store(req, res) {
    const album = await Album.create(req.body);
    return res.json(album);
  }

  async deleteAll(req, res) {
    const album = await Album.find();
    album.map(async item => await Album.findByIdAndDelete(item._id));
    return res.json({ message: "Todos albums apagados" });
  }
}

module.exports = new AlbumController();
