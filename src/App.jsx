import { useState } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {

  const [tarefa, setTarefa] =
    useState("");

  const [tarefas, setTarefas] =
    useState([]);

  function adicionarTarefa() {

    if (!tarefa) {
      alert(
        "Digite uma tarefa!"
      );
      return;
    }

    const novaTarefa = {
      texto: tarefa,
      concluida: false,
      criadaEm:
        new Date()
          .toLocaleString()
    };

    setTarefas([
      ...tarefas,
      novaTarefa
    ]);

    setTarefa("");
  }

  function concluirTarefa(
    index
  ) {

    const novasTarefas =
      [...tarefas];

    novasTarefas[index]
      .concluida =
      !novasTarefas[index]
        .concluida;

    setTarefas(
      novasTarefas
    );
  }

  function removerTarefa(
    index
  ) {

    const novasTarefas =
      tarefas.filter(
        (_, i) =>
          i !== index
      );

    setTarefas(
      novasTarefas
    );
  }

  const tarefasConcluidas =
    tarefas.filter(
      (tarefa) =>
        tarefa.concluida
    ).length;

  return (
    <div className="container">

      <div className="header">

        <h1>
           To-Do List
        </h1>

        <p>
          {
            tarefasConcluidas
          }{" "}
          de{" "}
          {tarefas.length}
          {" "}
          concluídas
        </p>

      </div>

      <TaskInput
        tarefa={tarefa}
        setTarefa={
          setTarefa
        }
        adicionarTarefa={
          adicionarTarefa
        }
      />

      <TaskList
        tarefas={tarefas}
        concluirTarefa={
          concluirTarefa
        }
        removerTarefa={
          removerTarefa
        }
      />

    </div>
  );
}

export default App;