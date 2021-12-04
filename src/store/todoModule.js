export const todoModule = {
  state: () => ({
    todos: [
      { id: 1, title: "todo 1", completed: false },
      { id: 2, title: "todo 2", completed: false },
      { id: 3, title: "todo 3", completed: false },
      { id: 4, title: "todo 4", completed: true },
    ],
  }),
  mutations: {
    setCompleted: (state, payload) => {
      const td = state.todos.find(todo => todo.id === payload.id)
      td.completed = payload.completed
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    addTodo: (state, todo) => {
      state.todos = [...state.todos, todo]
    }
  },
  getters: {
    getTodos: (state) => (state.todos),
  },
  actions: {},
  namespaced: true,

  };
