function TaskItem({
  item,
  index,
  concluirTarefa,
  removerTarefa
}) {

  return (
    <div className="tarefa">

      <div>

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

      </div>

      <div className="acoes">

        <button
          onClick={() =>
            concluirTarefa(index)
          }
        >
          Feito
        </button>

        <button
          onClick={() =>
            removerTarefa(index)
          }
        >
          Lixeira
        </button>

      </div>

    </div>
  );
}

export default TaskItem;