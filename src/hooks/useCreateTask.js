export function useCreateTask(todos) {
  const createTask = (title) => {
    const newTask = {
      id: Math.random(),
      title: title,
      completed: false,
    }
    todos.value.push(newTask); 
  }

  return createTask;
}
