import axios from "axios";

export const photoModule = {
  state: () => ({
    photos: [],
    isLoading: false,
    isError: "",
    sortBy: "id",
    selectedImage: null,
    isModalVisible: false,
  }),
  mutations: {
    setPhotos(state, photos) {
      state.photos = photos;
    },
    setSorted(state, sortedBy) {
      state.sortBy = sortedBy;
    },
    setError(state, message) {
      state.isError = message;
    },
    setLoading(state, flag) {
      state.isLoading = flag;
    },
    setSelectedImage(state, image) {
      state.selectedImage = image;
    },
    setModalVisible(state, isVisible) {
      state.isModalVisible = isVisible;
    },
  },
  getters: {
    getPhotos: (state) => state.photos,
    getLoading: (state) => state.isLoading,
    getError: (state) => state.isError,
    getSortedBy: (state) => state.sortBy,
    getSortedPhotos: (state) =>
      state.photos.sort((photo1, photo2) => {
        if (state.sortBy === "id") {
          return photo1.id - photo2.id;
        }
        if (state.sortBy === "title") {
          return photo1.title.localeCompare(photo2.title);
        }
        return -1;
      }),
  },
  actions: {
    async loadPhotos(context) {
      try {
        context.commit("setLoading", true);
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        );
        setTimeout(() => {
          context.commit("setPhotos", responce.data);
        }, 1000);
      } catch (e) {
        context.commit(
          "setError",
          "An unknown error occurred while uploading photos"
        );
      } finally {
        context.commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
