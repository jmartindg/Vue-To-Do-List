<template>
  <main class="flex py-10">
    <section
      class="container flex flex-col gap-4 min-h-screen justify-center w-full px-4 md:px-0 md:w-3/4 lg:w-2/4"
    >
      <Header />
      <Form />
      <section v-if="todoStore.todos.length === 0">
        <NoTodos />
      </section>
      <section v-if="todoStore.todos.length > 0">
        <div class="flex items-center justify-end space-x-4">
          <p class="font-semibold pb-4">
            Todos: <span class="font-normal">{{ todoStore.todos.length }}</span>
          </p>
          <p class="font-semibold pb-4">
            Done:
            <span class="font-normal" v-if="todoStore.doneTodosCount === 0"
              >0</span
            >
            <span class="font-normal" v-if="todoStore.doneTodosCount > 0">{{
              todoStore.doneTodosCount
            }}</span>
          </p>
        </div>
        <Lists />
      </section>
    </section>
  </main>
</template>

<script setup>
// Components
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Lists from "./components/Lists.vue";
import NoTodos from "./components/NoTodos.vue";

// Pinia
import { useTodoStore } from "./store/index.js";
const todoStore = useTodoStore();

// Initialize todos
todoStore.initializeTodos();
</script>
