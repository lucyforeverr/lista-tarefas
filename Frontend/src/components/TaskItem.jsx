function TaskItem({ item, index, concluirTarefa, removerTarefa }) {
  return (
    <div className="tarefa">
      <div>
        <p className={item.completed ? "concluida" : ""}>
          {item.title}
        </p>

        <small className="data">
          {new Date(item.createdAt).toLocaleString()}
        </small>
      </div>

      <div className="acoes">
        <button onClick={() => concluirTarefa(index)}>
          Feito
        </button>

        <button onClick={() => removerTarefa(index)}>
          Lixeira
        </button>
      </div>
    </div>
  );
}

export default TaskItem;