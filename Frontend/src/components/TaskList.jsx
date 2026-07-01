import TaskItem from "./TaskItem";

function TaskList({
  tarefas,
  concluirTarefa,
  removerTarefa
}) {

  return (
    <div className="lista-tarefas">

      {tarefas.length === 0 ? (
        <p className="vazio">
          Nenhuma tarefa adicionada 📝
        </p>
      ) : (
        tarefas.map(
          (item, index) => (
            <TaskItem
              key={index}
              item={item}
              index={index}
              concluirTarefa={
                concluirTarefa
              }
              removerTarefa={
                removerTarefa
              }
            />
          )
        )
      )}

    </div>
  );
}

export default TaskList;