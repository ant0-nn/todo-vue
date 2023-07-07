import axios from 'axios'
import { ref, onMounted } from 'vue'

export const useTodos = (limit, page) => {
  const todos = ref([]);
  const totalPages = ref(0);
  const isTodosLoading = ref(true);

  const fetching = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit
        }
      });

      // Фільтруємо завдання, які вже є у списку todos
      const newTodos = response.data.filter(todo => !todos.value.some(existingTodo => existingTodo.id === todo.id));

      todos.value = [...newTodos];
    } catch (e) {
      console.log(e);
    } finally {
      isTodosLoading.value = false;
    }
  }

  onMounted(fetching);

  return {
    todos,
    totalPages,
    isTodosLoading
  };
}
