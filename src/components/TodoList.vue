<template>
    <div class="todolist">
      <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        :delete-task="deleteTask"
        :toggle-completed="toggleCompleted"
      />
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: { TodoItem },
    props: {
      todos: {
        type: Array,
        required: true
      },
      deleteTask: {
        type: Function,
        required: true
      },
      toggleCompleted: {
        type: Function,
        required: true
      }
    },
    name: 'todo-list'
  };
  </script>
  

<style lang="scss" scoped>
    
</style>