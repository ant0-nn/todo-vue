export function useDeleteTask(todos) {
    const deleteTask = (taskId) => {
      todos.value = todos.value.filter((todo) => todo.id !== taskId);
    };
  
    return deleteTask;
  }
  