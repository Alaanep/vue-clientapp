<template>
    <div class="text-center bg-gray-50 text-dark-300">
        <h1 class="font-bold">{{title}}</h1>
        <ul>
            <li v-for="item in localExerciseList" :key="item.name">
                {{item.name}} : {{item.description}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{title: string}>();
//import { title } from 'process';

const localExerciseList=[
    {name: 'Harjutus 1', description: 'Harjutus 1'},
    {name: 'Harjutus 2', description: 'Harjutus 2'},
    {name: 'Harjutus 3', description: 'Harjutus 3'},
    {name: 'Harjutus 4', description: 'Harjutus 4'},
];

</script>