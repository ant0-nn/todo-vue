import { ref, watch } from 'vue';

export const useSortedAndSearchedTodos = (sortedTodos) => {
  const searchQuery = ref('');
  const sortedAndSearchedTodos = ref([]);

  const updateSortedAndSearchedTodos = () => {
    if (searchQuery.value === '') {
      sortedAndSearchedTodos.value = sortedTodos.value;
    } else {
      sortedAndSearchedTodos.value = sortedTodos.value.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
  };

  watch([sortedTodos, searchQuery], updateSortedAndSearchedTodos);

  return {
    searchQuery,
    sortedAndSearchedTodos,
  };
};
