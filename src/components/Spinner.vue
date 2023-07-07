<template>
  <div class="spinner">
    <div class="spinner-inner"></div>
  </div>
</template>

<script>
export default {
    name: 'spinner'
}
</script>

<style>
    .spinner {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }

    .spinner-inner {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 4px solid #f3f3f3;
        border-top-color: #1f76be;
        animation: spin 1s infinite linear;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>