const Song = require("../models/Song");

class SongController {
  async index(req, res) {
    const filters = new RegExp(req.query.search, "i");
    const songs = await Song.find({ title: filters });
    return res.json(songs);
  }
  async store(req, res) {
    const song = await Song.create(req.body);
    return res.json(song);
  }
  async deleteAll(req, res) {
    const song = await Song.find();
    song.map(async item => await Song.findByIdAndDelete(item._id));
    return res.json({ message: "Todas musicas apagadas" });
  }
}

module.exports = new SongController();
