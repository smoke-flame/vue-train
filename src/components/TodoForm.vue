<template>
  <form @submit.prevent="addNewTodo">
    <ui-input
      :value="todoText"
      @input="setText"
      class="input"
      :placeholder="placeholder"
    />
    <ui-button>Add&nbsp;todo</ui-button>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: ["placeholder"],
  data: () => ({
    todoText: "",
  }),
  methods: {
    ...mapMutations({
      addTodo: 'todo/addTodo'
    }),
    addNewTodo() {
      if(!this.todoText.trim().length) {
        alert('You can\'t add empty todo')
        return
      }
      const todo = {
        id: Date.now(),
        completed: false,
        title: this.todoText,
      };
      this.addTodo(todo);
      this.todoText = ''
    },
    setText(e) {
      this.todoText = e.target.value;
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 20px;
  display: flex;
}
.input {
  margin-right: 40px;
}
</style>
