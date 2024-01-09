<template>
  <section class="text-center bg-white p-10 shadow rounded-md">
    <h1 class="font-bold text-3xl">To-Do List</h1>

    <div class="flex justify-center mt-2 space-x-3">
      <!-- Link to GitHub Repository -->
      <a
        href="https://github.com/jmartindg/Vue-To-Do-List"
        target="_blank"
        title="Source Code"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 hover:text-green-500 transition duration-300 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      </a>

      <!-- Application Info -->
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 cursor-pointer hover:text-green-500 transition duration-300 ease-in-out"
          @mouseenter="showPopover = true"
          @mouseleave="showPopover = false"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <div
          v-if="showPopover"
          class="absolute top-full left-1/2 transform -translate-x-1/2 p-4 bg-white border border-gray-200 shadow-md rounded-md"
        >
          <p class="text-sm text-gray-600">
            This application uses the Browser's Local Storage to store data
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const showPopover = ref(false);
</script>
