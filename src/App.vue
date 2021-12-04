<template>
  <div class="app">
    <Navigation/>
  </div>
  <router-view />
</template>


<script>
import Navigation from "./components/Navigation";
export default {
  components: {Navigation}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.app {
  width: 100%;
  max-width: 1470px;
  margin: 0 auto;
}
.app__title {
  width: 100%;
  max-width: 1470px;
  margin: 0 auto;
}


</style>