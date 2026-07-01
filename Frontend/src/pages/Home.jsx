import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const navigate = useNavigate();

  async function buscarTarefas() {
    const resposta = await api.get("/tasks");
    setTarefas(resposta.data);
  }

  async function adicionarTarefa() {
    if (!tarefa) {
      alert("Digite uma tarefa!");
      return;
    }

    await api.post("/tasks", {
      title: tarefa,
      description: "",
    });

    setTarefa("");
    buscarTarefas();
  }

  async function concluirTarefa(index) {
    const item = tarefas[index];

    await api.put(`/tasks/${item.id}`, {
      title: item.title,
      description: item.description,
      completed: !item.completed,
    });

    buscarTarefas();
  }

  async function removerTarefa(index) {
    const item = tarefas[index];

    await api.delete(`/tasks/${item.id}`);

    buscarTarefas();
  }

  function sair() {
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    buscarTarefas();
  }, []);

  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.completed).length;

  return (
    <div className="container">
      <div className="header">
        <h1>To-Do List</h1>

        <p>
          {tarefasConcluidas} de {tarefas.length} concluídas
        </p>
      </div>

      <TaskInput
        tarefa={tarefa}
        setTarefa={setTarefa}
        adicionarTarefa={adicionarTarefa}
      />

      <TaskList
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        removerTarefa={removerTarefa}
      />

      <button onClick={sair}>Sair</button>
    </div>
  );
}

export default Home;