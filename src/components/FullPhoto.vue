<template>
  <div class="photo">
    <ui-title class="photo__title">{{image?.title}}</ui-title>
    <img class="photo__image" :src="image?.url" alt="full-image">
  </div>
</template>

<script>
export default {
  props: ['image']
}
</script>

<style scoped>
.photo {
  width: 60vw;
  text-align: center;
}

.photo__title {
  margin-bottom: 30px;
}

.photo__image{
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>