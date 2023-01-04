import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todo_db", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});
