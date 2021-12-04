<template>
  <div class="todos__item">
    <div class="todo__data">
      <span class="todo__id">{{ todo.id + "." }}</span>
      <input type="checkbox" :checked="todo.completed" @change="toggleTodo" class="todos__input" />
      <span class="todo__title" :class="todo.completed ? 'completed' : ''">{{
        todo.title
      }}</span>
    </div>
    <div class="todo__actions" @click="deleteThisTodo">
      <ui-button>Delete</ui-button>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: ["todo"],
  methods: {
    ...mapMutations({
      deleteTodo: 'todo/deleteTodo',
      setCompleted: "todo/setCompleted"
    }),
    toggleTodo(e) {
      // this.$emit('toggleTodo', {id: this.todo.id, completed: e.target.checked })
      this.setCompleted({id: this.todo.id, completed: e.target.checked })
    },
    deleteThisTodo(){
      this.deleteTodo(this.todo.id)
    }
  }
};
</script>

<style scoped>
.todos__item {
  margin-bottom: 10px;
  padding: 15px 15px;
  border: 2px solid #0940f3;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
}
.todos__input {
  display: inline-block;
  margin-right: 10px;
}
.todo__id {
  margin-right: 10px;
}
.todo__title.completed {
  text-decoration: line-through;
}
</style>
