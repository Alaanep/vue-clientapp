<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
        <div class="text-center bg-gray-50">
            <h1 class="font-bold">{{ title }}</h1>
            <div v-if="tudengid.length===0">Tudengid puuduvad</div>
            <DataTable :value="tudengid" v-if="tudengid.length>0">
                <Column field="martiklinr" header="Martikli Nr" />
                <Column field="eesnimi" header="Eesnimi" />
                <Column field="perenimi" header="Perenimi" />
                <Column field="staatus" header="Staatus" />
            </DataTable>
        </div>
    </div>
</template>
<script setup lang="ts">
    
import {  } from 'process';
//import useExercise from '@/stores/ExercisesStore';
import {tudengiteStore} from '@/stores/tudengiteStore';
//import { onMounted } from 'vue';
//import Exercise from './Exercise.vue';
defineProps<{title: string}>();
//const { exercises, load } = useExercise();
//onMounted(() => load());
const {tudengid}=tudengiteStore();

</script>