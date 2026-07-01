const prisma = require("../prisma");

async function createTask(req, res) {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "O título é obrigatório" });
  }

  const task = await prisma.task.create({
    data: {
      title,
      description,
      userId: req.userId
    }
  });

  return res.status(201).json(task);
}

async function listTasks(req, res) {
  const tasks = await prisma.task.findMany({
    where: { userId: req.userId }
  });

  return res.json(tasks);
}

async function updateTask(req, res) {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = await prisma.task.findFirst({
    where: {
      id: Number(id),
      userId: req.userId
    }
  });

  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  const updatedTask = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, description, completed }
  });

  return res.json(updatedTask);
}

async function deleteTask(req, res) {
  const { id } = req.params;

  const task = await prisma.task.findFirst({
    where: {
      id: Number(id),
      userId: req.userId
    }
  });

  if (!task) {
    return res.status(404).json({ message: "Tarefa não encontrada" });
  }

  await prisma.task.delete({
    where: { id: Number(id) }
  });

  return res.json({ message: "Tarefa excluída com sucesso" });
}

module.exports = {
  createTask,
  listTasks,
  updateTask,
  deleteTask
};