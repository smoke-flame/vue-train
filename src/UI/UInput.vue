<template>
  <input type="text" />

</template>

<script>
export default {
  name: 'ui-input'
}
</script>

<style scoped>
input {
  display: block;
  padding: 10px 15px;
  width: 100%;
  border: 1px solid teal;
  background: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  font-size: 16px;
}
.input:hover {
  background-color: #e1ffff;
}
.input:focus {
  background-color: #cffcfc;
  border: 1px solid #015252;
  box-shadow: 0 3px 10px rgba(0,0,0, 0.2);

}
</style>