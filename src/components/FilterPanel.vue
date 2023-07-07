<template>
  <div class="filter-panel">
    <button class="filter-panel__btn" @click="setFilter('All')">All</button>
    <button class="filter-panel__btn" @click="setFilter('Active')">Active</button>
    <button class="filter-panel__btn" @click="setFilter('Completed')">Completed</button>
  </div>
</template>

<script>
export default {
    name: 'filter-panel',
    props: {
        setFilter: {
            type: Function,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
    .filter-panel {
        display: flex;
        align-items: center;
        margin-left: 150px;
        &__btn {
            background: none;
            color: #afafaf;
            padding: 10px;
            border: none;
            margin-right: 30px;
            cursor: pointer;
            font-size: 25px;
            &:last-child {
                margin-right: 0;
            }
            &.active {
                color: white;
            }
        }
    }
</style>