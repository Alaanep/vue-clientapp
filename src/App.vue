<template>
  <!--<ExerciseList title="Harjutuste nimekiri" /> -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
              to="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="bg-gray-900 text-white"
              aria-current="page"
              >Harjutused
              </router-link>

              <router-link
              to="/newexercise"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="bg-gray-900 text-white"
              >Lisa harjutus</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </nav>

<router-view />
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  //import ExerciseList from './components/ExerciseList.vue';
</script>

