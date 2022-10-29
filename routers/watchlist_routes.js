const express = require("express");
const watchlistController = require("../controllers/watchlist_controller");
const router = express.Router();
const authMiddleWare = require("../middleware/auth");

router.get(
  "/lists",
  authMiddleWare,
  watchlistController.getProjectsWatchedByUser
);
router.post(
  "/:projectName",
  authMiddleWare,
  watchlistController.addToWatchlist
);

module.exports = router;
