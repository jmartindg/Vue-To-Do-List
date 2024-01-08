<template>
  <section class="mt-6 my-5 flex flex-col">
    <form
      @submit.prevent="addTodo"
      class="flex flex-col md:flex-row md:space-x-3"
    >
      <input
        class="w-full rounded-md border-gray-300 border-2 p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        type="text"
        placeholder="What do you want to do?"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
      <input
        class="md:w-1/4 mt-2 md:mt-0 p-2 md:p-0 bg-green-500 text-gray-50 font-medium rounded-md cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out"
        type="submit"
        value="Add Todo"
        @click="addTodo"
      />
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store";

const todoStore = useTodoStore();
const newTodo = ref("");

const addTodo = () => {
  todoStore.addTodo(newTodo.value);
  newTodo.value = "";
};
</script>
