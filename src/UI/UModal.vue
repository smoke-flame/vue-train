<template>
  <div ref="modal" @click="closeModal" :class="isVisible ? 'modal active' : 'modal' ">

    <div class="modal__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-modal',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeModal(e) {
      if(e.target === this.$refs.modal) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.5);
  align-items: center;
  justify-content: center;
  display: none;
  z-index: 99;
}

.modal.active {
  display: flex;
}


.modal__body {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
}
</style>