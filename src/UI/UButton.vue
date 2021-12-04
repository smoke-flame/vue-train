<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ui-button',
}
</script>

<style scoped>
.my-button {
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  border-radius: 5px;
  font-size: 16px;
  color: teal;
  cursor: pointer;
  transition: all 0.2s linear;
}
.my-button:hover {
  background-color: teal;
  color: #fff;
}
</style>