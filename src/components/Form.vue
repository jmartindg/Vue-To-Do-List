<template>
  <section class="mt-6 my-5 flex flex-col">
    <form
      @submit.prevent="addTodo"
      class="flex flex-col md:flex-row md:space-x-3"
    >
      <input
        :class="{
          'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent':
            !valid,
        }"
        class="w-full rounded-md border-gray-300 border-2 p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        type="text"
        placeholder="What do you want to do?"
        v-model="newTodo"
      />
      <input
        class="md:w-1/4 mt-2 md:mt-0 p-2 md:p-0 bg-green-500 text-gray-50 font-medium rounded-md cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out"
        type="submit"
        value="Add Todo"
      />
    </form>
    <span :class="{ 'mt-2': !valid }" v-if="!valid" class="text-red-500 text-sm"
      >Please enter a todo before adding</span
    >
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store";

const todoStore = useTodoStore();
const newTodo = ref("");
const valid = ref(true);

const addTodo = () => {
  const trimmedTodo = newTodo.value.trim();

  if (trimmedTodo === "") {
    valid.value = false;

    // Reset the validation status after 3 seconds
    setTimeout(() => {
      valid.value = true;
    }, 3000);

    return;
  }

  todoStore.addTodo(trimmedTodo);
  newTodo.value = "";
  valid.value = true;
};
</script>
