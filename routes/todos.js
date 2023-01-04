import Router from "express";

import {
  getTodos,
  addTodo,
  getTodoById,
  deleteTodoById,
  updateTodoById,
} from "../controller/todos.js";

const router = Router();

router.get("/", getTodos);

router.post("/", addTodo);

router.get("/:id", getTodoById);

router.delete("/:id", deleteTodoById);
router.put("/:id", updateTodoById);
export default router;
