<template>
  <div class="todos">
    <ui-title class="title">Todos page</ui-title>

    <TodoForm placeholder="Type todo title" />

    <div class="todos__list" v-if="getTodos.length">
      <transition-group name="todos">
        <TodoItem
          v-for="item in getTodos"
          :key="item.id"
          :todo="item"
          :completed="item.completed"
        />
      </transition-group>
    </div>
    <ui-title class="todos__title" v-else >No todos in your list</ui-title>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
export default {
  name: "Todos",
  components: { TodoForm, TodoItem },
  data: () => ({}),
  computed: {
    ...mapGetters({
      getTodos: "todo/getTodos",
    }),
  },
};
</script>

<style>
.todos__list {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.todos {
  width: 100%;
  max-width: 1470px;
  margin: 0 auto;
  padding: 0 15px;
}

.todos__title {
  margin-top: 30px;
}
.todos-enter-active,
.todos-leave-active {
  transition: all 0.6s;
}
.todos-enter,
.todos-leave-to {
  opacity: 0;
  transform: translateX(-130px);
}
</style>
