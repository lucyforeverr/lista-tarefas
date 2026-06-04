import { useState } from "react";
import "./App.css";

function App() {

  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (!tarefa) {
      alert("Digite uma tarefa!");
      return;
    }

    const novaTarefa = {
      texto: tarefa,
      concluida: false,
      criadaEm: new Date().toLocaleString()
    };

    setTarefas([
      ...tarefas,
      novaTarefa
    ]);

    setTarefa("");
  }

  function concluirTarefa(index) {

    const novasTarefas =
      [...tarefas];

    novasTarefas[index].concluida =
      !novasTarefas[index].concluida;

    setTarefas(novasTarefas);
  }

  function removerTarefa(index) {

    const novasTarefas =
      tarefas.filter((_, i) =>
        i !== index
      );

    setTarefas(novasTarefas);
  }
  const tarefasConcluidas = 
  tarefas.filter(
    (tarefa) =>
      tarefa.concluida
  ).length;
  
  return (
    <div className="header">

      <h1>To-do List</h1>

      <p>
        {tarefasConcluidas}
        {" "}
        de
        {" "}
        {tarefas.length}
        {" "}
        concluidas
        </p>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) =>
          setTarefa(e.target.value)
        }
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <div className="lista-tarefas">

  {tarefas.length === 0 ? (
    <p className="vazio">
      Nenhuma tarefa adicionada 📝
    </p>
  ) : (
    tarefas.map((item, index) => (
      <div
        key={index}
        className="tarefa"
      >

        <p
          className={
            item.concluida
              ? "concluida"
              : ""
          }
        >
          {item.texto}
        </p>

        <small className="data">
          {item.criadaEm}
        </small>

        <div className="acoes">

          <button
            onClick={() =>
              concluirTarefa(index)
            }
          >
            ✓
          </button>

          <button
            onClick={() =>
              removerTarefa(index)
            }
          >
            🗑
          </button>

        </div>

      </div>
    ))
  )}

</div>

    </div>
  );
}

export default App;