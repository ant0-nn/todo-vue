export function useToggleCompleted() {
  const toggleCompleted = (todo) => {
    todo.completed = !todo.completed;
  };

  return {
    toggleCompleted
  };
}
