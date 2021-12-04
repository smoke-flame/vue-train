<template>
  <div class="cards__item">
    <ui-title class="cards__title">{{photo.title }} </ui-title>
    <img class="cards__image" :src="photo.thumbnailUrl" alt="photo">
    <ui-button @click="setPhoto" class="cards__btn">Open full image</ui-button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: {
    photo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapMutations({
      setSelectedImage: 'photo/setSelectedImage',
      setModalVisible: 'photo/setModalVisible'
    }),
    setPhoto() {
      this.setSelectedImage(this.photo)
      this.setModalVisible(true)
    }
  }
}
</script>

<style>
  .cards__item {
    padding: 15px;
    border: 1px solid teal;
    width: 30%;
    margin-bottom: 15px;
    cursor: pointer;
    min-width: 270px;
  }
  .cards__title {
    font-size: 18px !important;
    margin-bottom: 15px;
    height: 40px;
    overflow: hidden;
  }

  .cards__image {
    display: block;
    width: 100%;
    max-width: 100%;
  }

  .cards__btn {
    margin-top: 20px ;
  }
</style>