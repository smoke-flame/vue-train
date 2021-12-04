<template>
  <ui-title class="app__title">
    This page was created for educational purposes using vue js.<br>
    To simulate work with the server, the service
    <a href="https://jsonplaceholder.typicode.com"> https://jsonplaceholder.typicode.com/</a> was used
  </ui-title>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style>

.app__title {
  width: 100%;
  max-width: 1470px;
  margin:30px auto;
  padding: 0 30px;
}
.app__title a, .app__title a:visited {
  color: #2099e3;
}


</style>