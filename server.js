require("dotenv").config();

const express = require("express");
const cors = require("cors");
const propertyRouter = require("./routers/property_routes");
const userRouter = require("./routers/user_routes");
const watchlistRouter = require("./routers/watchlist_routes");

const app = express();
const port = process.env.PORT || 8000;
const db = require("./models");

//everytime user logs in create token associated with user. While user is logged in, use token to make any API request
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.use("/api/projects", propertyRouter);
app.use("/api/users", userRouter);
app.use("/api/watchlist", watchlistRouter);

const projectsController = require("./controllers/property_controller");
app.get(
  "/api/projects/project-details",
  cors(),
  projectsController.getProjectDetails
);

app.listen(port, async () => {
  console.log(`PropInvest backend listening on port ${port}`);
});
