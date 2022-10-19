require("dotenv").config();

const express = require("express");
const cors = require("cors");
const propertyRouter = require("./routers/property_routes");
const userRouter = require("./routers/user_routes");

const app = express();
const port = process.env.PORT || 8000;
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/projects", propertyRouter);
// app.use("/api/users", userRouter);

app.listen(port, async () => {
  console.log(`PropInvest backend listening on port ${port}`);
});
