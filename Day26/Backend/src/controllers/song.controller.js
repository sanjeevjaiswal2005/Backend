const songModel = require("../models/song.model");
const storageService = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSongController(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tages = id3.read(songBuffer);

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tages.title + ".mp3",
      folder: "/Moodify/songs",
    }),
    storageService.uploadFile({
      buffer: tages.image.imageBuffer,
      filename: tages.title + ".jpeg",
      folder: "/Moodify/songs",
    }),
  ]);

  const song = await songModel.create({
    title: tages.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song created successfully....",
    song,
  });
}

async function getSong(req, res) {
  const { mood } = req.query;
  const song = await songModel.findOne({
    mood,
  });

  res.status(200).json({
    message: "song fatched successfully...",
    song,
  });
}

module.exports = {
  uploadSongController,
  getSong,
};
