import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Todo = sequelize.define(
  "todo",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    createdBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    priority: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    taskCategory: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    textBody: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    startTime: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completionTime: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    taskStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },

  { updatedAt: "updated_at", createdAt: "created_at" }
);
