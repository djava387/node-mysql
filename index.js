import express from "express";
import router from "./routes/todos.js";
import { sequelize } from "./db/index.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

try {
  const result = await sequelize.sync();
  console.log(result);
} catch (error) {
  console.log(error);
}

app.use(bodyParser.json());

app.use("/todos", router);

app.get("/", (req, res) => {
  res.send("Hello Risper");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
