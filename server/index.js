import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { sequelize } from "./util/database.js";

import postRoutes from "./routes/posts.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/post", postRoutes);

await sequelize
  .sync()
  .then((result) => {
    console.log("working");
  })
  .then(() => {
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })

  .catch((err) => {
    console.log(err);
  });
