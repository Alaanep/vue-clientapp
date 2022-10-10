<template>
    <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-dark-300">
        <div class="text-center bg-gray-50">
            <h1 class="font-bold">{{ title }}</h1>
            <div v-if="people.length===0">No Persons to show</div>
            <DataTable :value="people" v-if="people.length>0">
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
                <Column field="gender" header="Gender" />
                <Column field="dateOfBirthv" header="DateOfBirth" />
                <Column field="hairColor" header="HairColor" />
                <Column field="height" header="Height" />
                <Column field="weight" header="Weight" />
            </DataTable>
        </div>
    </div>
</template>
<script setup lang="ts">
    

import { UsePeopleStore } from '@/stores/peopleStore';
import {storeToRefs} from 'pinia';
import { onMounted } from 'vue';
defineProps<{title: string}>();
const peopleStore =UsePeopleStore();
const { people } = storeToRefs(peopleStore);

onMounted(()=>{
    peopleStore.load();
});

</script>