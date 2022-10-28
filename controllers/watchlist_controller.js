const { watch } = require("fs");
const db = require("../models");

module.exports = {
  addToWatchlist: async (req, res) => {
    try {
      //1. Get user and project name
      const user = await db.user.findOne({
        where: { email: res.locals.userAuth.data.email },
      });
      const [projectWatchlist, created] = await db.watchlist.findOrCreate({
        where: { projectName: req.params.projectName },
        defaults: {
          projectName: req.params.projectName,
        },
      });
      console.log("Created:", created);
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

      if (userWatchlist) {
        return res.json({ error: "Project exists in watchlist" });
      }
      await user.addWatchlist(projectWatchlist);
      return res.json("Added to watchlist");
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: "Unable to add to watchlist" });
    }
  },

  getProjectsWatchedByUser: async (req, res) => {
    const user = await db.user.findOne({
      where: { email: res.locals.userAuth.data.email },
    });

    try {
      const userWatchlist = await db.userWatchlist.findAll({
        where: {
          userId: user.dataValues.id,
        },
      });
      const projIds = await userWatchlist.map((p) => {
        return p.dataValues.watchlistId;
      });
      const listOfProjects = await db.watchlist.findAll({
        where: {
          id: projIds,
        },
      });
      const allProj = listOfProjects.map((p) => {
        return p.dataValues.projectName;
      });
      return res.json(allProj);
    } catch (err) {
      res.status(400).json({ error: "Unable to retrieve watchlist" });
    }
  },
};
