<template>
    <div class="min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
        <div class="text-center bg-gray-50">
            <h1 class="font-bold">{{ title }}</h1>
            <ul>
                <li v-for="item in localExerciseList" :key="item.name">
                    <Exercise :exercise="item" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

import {  } from 'process';
import Exercise from './Exercise.vue';
defineProps<{title: string}>();
const localExerciseList=[
    {name: 'Harjutus 1', description: 'Harjutus 1'},
    {name: 'Harjutus 2', description: 'Harjutus 2'},
    {name: 'Harjutus 3', description: 'Harjutus 3'},
    {name: 'Harjutus 4', description: 'Harjutus 4'},
];

</script>