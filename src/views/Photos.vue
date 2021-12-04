<template>
  <div class="photos">
    <ui-title class="title">Photos page</ui-title>
    <p class="sort" @click="setSortedBy">
      Sort by
      <span data-sort="id" class="sort__variant" :class="getSortedBy === 'id' ?'active': '' ">id</span>
      <span  data-sort="title" class="sort__variant" :class="getSortedBy === 'title' ?'active': '' ">title</span>
    </p>

    <ui-title v-if="getError">{{getError}}</ui-title>
    <div v-else>
      <div class="cards" v-if="getPhotos.length">
        <PhotoCard v-for="photo in getSortedPhotos" :key="photo.id" :photo="photo"></PhotoCard>
      </div>
      <ui-loader v-else color="teal"></ui-loader>
    </div>

    <ui-modal :isVisible="isModalVisible" @close="closeModal">
      <FullPhoto :image="selectedImage"/>
    </ui-modal>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'
import PhotoCard from "../components/PhotoCard";
import FullPhoto from "../components/FullPhoto";
import UiTitle from "../UI/UTitle";
export default {
  name: "Photos",
  components: {UiTitle, FullPhoto, PhotoCard},
  methods: {
    ...mapActions({
      loadPhotos: 'photo/loadPhotos',
    }),
    ...mapMutations({
      setSorted: 'photo/setSorted',
      setModalVisible: 'photo/setModalVisible'
    }),
    setSortedBy(e) {
      if(e.target.classList.contains('sort__variant')) {
        this.setSorted(e.target.dataset.sort)
      }
    },
    closeModal() {
      this.setModalVisible(false)
    }
  },
  computed: {
    ...mapGetters({
      getLoading: 'photo/getLoading',
      getPhotos: 'photo/getPhotos',
      getError: 'photo/getError',
      getSortedPhotos: 'photo/getSortedPhotos',
      getSortedBy: 'photo/getSortedBy'
    }),
    ...mapState({
      isModalVisible: state => state.photo.isModalVisible,
      selectedImage: state=> state.photo.selectedImage
    })
  },
  mounted() {
    this.loadPhotos()
  }


};

</script>
<style>
.photos {
  width: 100%;
  max-width: 1470px;
  margin: 0 auto;
  padding: 0 15px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.sort {
  margin-top: 30px;
  text-align: left;
  margin-bottom: 15px;
}

.sort__variant {
  margin-left: 10px;
  color: #333;
  font-weight: 600;
  opacity: 0.5;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.2s linear;
}
.sort__variant:hover {
  opacity: 1;
}

.sort__variant.active {
  color: teal;
  opacity: 1;
  text-decoration: none;
}
.title {
  font-size: 32px !important;
}
</style>