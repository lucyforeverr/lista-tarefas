function TaskInput({
  tarefa,
  setTarefa,
  adicionarTarefa
}) {

  return (
    <>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) =>
          setTarefa(e.target.value)
        }
      />

      <button
        onClick={adicionarTarefa}
      >
        Adicionar
      </button>

    </>
  );
}

export default TaskInput;