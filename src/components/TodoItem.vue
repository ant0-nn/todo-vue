<template>
  <div class="todo-item" :class="{ 'hovered': isHovered }" @mouseover="isHovered = true" @mouseout="isHovered = false">
    <div class="todo-item__circle" :class="{ 'completed': todo.completed }" @click="toggleCompleted(todo)"></div>
    <h2 class="todo-item__title" :class="{ 'completed': todo.completed }">{{ todo.title }}</h2>
    <font-awesome-icon icon="fa-solid fa-xmark" beat size="xl" class="todo-item__delete" @click="() => deleteTask(todo.id)"/>
  </div>
</template>


<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
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
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-left: 43px;
  margin-top: 25px;

  &:last-child {
    margin-bottom: 25px;
  }

  &__circle {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    stroke-width: 3px;
    border-radius: 50%;
    border: 3px solid #fff;
    cursor: pointer;
    &.completed {
      border: 3px solid #1bd814;
    }
  }

  &__title {
    color: #fff;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 3.125px;
    margin-left: 20px;
    cursor: pointer;
    &.completed {
      text-decoration: line-through;
    }
  }

  &__delete {
    display: none; // По замовчуванню приховуємо хрестик
    margin-left: auto;
    margin-right: 20px;
    color: #fff;
    cursor: pointer;
  }

  &.hovered .todo-item__delete {
    display: block;
  }
}
</style>


