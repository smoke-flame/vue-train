<template>
  <div class="multi-spinner-container" >
    <div class="multi-spinner" :style="setColorStyle">
      <div class="multi-spinner" :style="setColorStyle">
        <div class="multi-spinner" :style="setColorStyle">
          <div class="multi-spinner" :style="setColorStyle">
            <div class="multi-spinner" :style="setColorStyle">
              <div class="multi-spinner" :style="setColorStyle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'ui-loader',
  props: ['color'],
  computed: {
    setColorStyle() {
      return {
        'border-top-color': this.color,
      }
    }
  }
}
</script>

<style scoped>
.multi-spinner-container {
  width: 150px;
  height: 150px;
  position: relative;
  margin: 30px auto;
  overflow: hidden;
}

.multi-spinner {
  position: absolute;
  width: calc(100% - 9.9px);
  height: calc(100% - 9.9px);
  border: 5px solid transparent;
  border-radius: 50%;
  -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
}


@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>