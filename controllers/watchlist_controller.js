const { watch } = require("fs");
const db = require("../models");

module.exports = {
  addToWatchlist: async (req, res) => {
    try {
      //1. Get user and project name
      // const projectWatchlist = await db.watchlist.findOne({
      //   where: { projectName: req.params.projectName },
      // });
      const user = await db.user.findOne({
        where: { email: res.locals.userAuth.data.email },
      });
      const [projectWatchlist, created] = await db.watchlist.findOrCreate({
        where: { projectName: req.params.projectName },
        defaults: {
          projectName: req.params.projectName,
        },
      });
      // if project doesn't exist in watchlist table, create and tag to user
      if (created) {
        await user.addWatchlist(projectWatchlist);
        return res.json("Added to watchlist");
      }
      // if project exists in watchlist table, check if it is associated to user in userwatchlist table
      const userWatchlist = await db.userWatchlist.findOne({
        where: {
          userId: user.dataValues.id,
          watchlistId: projectWatchlist.dataValues.id,
        },
      });
      if (!userWatchlist) {
        await user.addWatchlist(projectWatchlist);
        return res.json("Added to watchlist");
      } else {
        return res.json({ error: "Project exists in watchlist" });
      }

      //   console.log("User Watchlist:", userWatchlist);
      // }
      //2. Check if the project exists in watchlist table

      // if project doesn't exist,
      // if(!projectWatchlist) {
      //   const [watchlist, created] = await db.watchlist.findOrCreate({
      //   where: { projectName: project },
      //   defaults: {
      //     projectName: project,
      //   },

      // const userTag = await db.user.findOne({
      //   where: { email: email },
      // });

      // await userTag.addWatchlist(watchlist);

      // console.log("User Tag:", userTag);
      // console.log("Watchlist:", watchlist);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Unable to add to watchlist" });
    }
  },
};
