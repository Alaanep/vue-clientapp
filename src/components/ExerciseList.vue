<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
        <div class="text-center bg-gray-50">
            <h1 class="font-bold">{{ title }}</h1>
            <DataTable :value="exercises">
                <Column field="name" header="Nimi" />
                <Column field="description" header="Kirjeldus" />
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">

import {  } from 'process';
//import useExercise from '@/stores/ExercisesStore';
import {useExercisesStore} from '@/stores/ExercisesStore';
//import { onMounted } from 'vue';
//import Exercise from './Exercise.vue';

defineProps<{title: string}>();
//const { exercises, load } = useExercise();
//onMounted(() => load());
const {exercises}=useExercisesStore();

</script>