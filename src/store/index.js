import { createPinia, defineStore } from "pinia";

export const pinia = createPinia();

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: [],
  }),
  getters: {
    doneTodosCount: (state) => state.todos.filter((todo) => todo.done).length,
  },
  actions: {
    // Add todo
    addTodo(newTodo) {
      if (newTodo.trim() !== "") {
        this.todos.push({ text: newTodo.trim(), done: false });
        this.saveTodoToLocalStorage();
      }
    },
    // Remove todo
    toggleTodoStatus(index) {
      this.todos[index].done = !this.todos[index].done;
      this.saveTodoToLocalStorage();
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodoToLocalStorage();
    },
    // Save todos to local storage
    saveTodoToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    // Get todos from local storage
    initializeTodos() {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
  },
});
