<template>
    <div class="create-task">
      <input
        type="text"
        class="create-task__input"
        placeholder="Create..."
        v-model="inputValue"
      />
      <button class="create-task__btn" @click="createTask(inputValue), inputValue=''">
        Create task
      </button>

    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'create-task',
    props: {
      createTask: {
        type: Function,
        required: true,
      },
    },
    setup() {
        const inputValue = ref(''); 
        return {
            inputValue,
        };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .create-task {
    border-top: 1px solid #6b6b6b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  
    &__input {
      width: 600px;
      padding: 20px;
      background: none;
      outline: none;
      border-width: 2px 0px;
      border-style: solid;
      border-radius: 10px;
      border-color: #6b6b6b;
      color: #fff;
      font-size: 16px;
      filter: drop-shadow(0px 0px 25px #6b6b6b);
    }
  
    &__btn {
      padding: 20px;
      background: none;
      outline: none;
      border-width: 2px 0px;
      border-style: solid;
      border-radius: 10px;
      border-color: #6b6b6b;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      filter: drop-shadow(0px 0px 25px #6b6b6b);
    }
  }
  </style>
  