<template>
  <input
    class="search"
    type="text"
    placeholder="Search..."
    :value="searchQuery"
    @input="$emit('update:search-query', $event.target.value)"
    />
</template>

<script>
export default {
    name: 'search-panel',
    props: {
        searchQuery: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped> 
    .search {
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
</style>