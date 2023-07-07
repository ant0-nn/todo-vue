<template>
  <div class="container">
    <h1 class="title">TODOS</h1>
    <div class="wrapper">
      <div class="filter">
        <search-panel :search-query="searchQuery" @update:search-query="searchQuery = $event" />
        <filter-panel :set-filter="setFilter" />
      </div>
      <todo-list
        v-if="!isTodosLoading"
        :todos="sortedAndSearchedTodos"
        :delete-task="deleteTask"
        :toggle-completed="toggleCompleted"
      />
      <spinner v-else />
      <create-task :create-task="createTask" />
    </div>
  </div>
</template>

<script>
import { useTodos } from './hooks/useTodos';
import { useSortedTodos } from './hooks/useSortedTodos';
import { useSortedAndSearchedTodos } from './hooks/useSortedAndSearchedTodos';
import { useCreateTask } from './hooks/useCreateTask';
import { useDeleteTask } from './hooks/useDeleteTask';
import {useToggleCompleted} from './hooks/useToggleCompleted'

export default {
  setup() {
    const { todos, totalPages, isTodosLoading } = useTodos(10, 0);
    const { sortedTodos, setFilter } = useSortedTodos(todos);
    const { searchQuery, sortedAndSearchedTodos, updateSearchQuery } = useSortedAndSearchedTodos(
      sortedTodos
    );
    const createTask = useCreateTask(todos);
    const deleteTask = useDeleteTask(todos);
    const {toggleCompleted} = useToggleCompleted()

    return {
      todos,
      totalPages,
      isTodosLoading,
      sortedTodos,
      setFilter,
      searchQuery,
      sortedAndSearchedTodos,
      updateSearchQuery,
      createTask,
      deleteTask,
      toggleCompleted,
    };
  }
};
</script>

<style>
.wrapper {
  width: auto;
  margin: 55px auto 0;
  border-radius: 10px;
  border: 3px solid #878585;
  box-shadow: 0px 0px 15px 0px #878585;
}
.filter {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #878585;
  padding: 20px;
}
</style>
