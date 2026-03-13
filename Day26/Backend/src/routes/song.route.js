const express = require("express");
const {
  uploadSongController,
  getSong,
} = require("../controllers/song.controller");
const upload = require("../middlewares/upload.middleware");
const router = express.Router();

router.post("/", upload.single("song"), uploadSongController);

router.get("/", getSong);

module.exports = router;
