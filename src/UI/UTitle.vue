<template>
  <h1 class="my-title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'ui-title'
}
</script>

<style scoped>
.my-title {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>