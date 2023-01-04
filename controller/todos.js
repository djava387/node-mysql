import { Todo } from "../models/todos.js";
import { Op } from "sequelize";

export const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).send({ data: `Todo ID: ${todo.id} created` });
  } catch (error) {
    res.status(403).send(error.message);
  }
};
export const getTodos = async (req, res) => {
  const { title, createdby, priority } = req.query;

  const query = { where: {} };

  if (title) {
    query.where.title = {
      [Op.like]: `%${title}%`,
    };

    // if (priority) {
    //   query.where.priority = {
    //     order: [["priority", "ASC"]],
    //   };
    // }

    if (createdby) {
      query.where.createdBy = {
        [Op.eq]: createdby,
      };
    }
  }
  try {
    const todos = await Todo.findAll(query);
    res.send(todos);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
export const getTodoById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const todo = await Todo.findByPk(id);

    if (!todo) {
      throw new Error("Task not found");
    }

    res.send(todo);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const updateTodoById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const todo = await Todo.update(req.body, {
      where: {
        id,
      },
    });

    if (todo[0] === 0) {
      throw new Error("Task not found");
    }

    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};

export const deleteTodoById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const todo = await Todo.destroy({ where: { id } });

    if (todo[0] === 0) {
      throw new Error("Task not found");
    }

    res.status(204).send();
  } catch (error) {
    res.status(404).send(error.message);
  }
};
