import { reactive, computed, ref } from 'vue';

export function useSortedTodos(todos) {
  const activeFilter = ref('All');

  const sortedTodos = computed(() => {
    if (activeFilter.value === 'Active') {
      return todos.value.filter((todo) => !todo.completed);
    } else if (activeFilter.value === 'Completed') {
      return todos.value.filter((todo) => todo.completed);
    } else {
      return todos.value;
    }
  });

  const setFilter = (filter) => {
    activeFilter.value = filter;
  };

  return {
    sortedTodos,
    setFilter,
  };
}
