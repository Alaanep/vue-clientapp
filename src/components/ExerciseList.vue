<template>
    <div>
        <h1>{{title}}</h1>
        <ul>
            <li>Harjutus 1: Kirjeldus</li>
            <li>Harjutus 2: Kirjeldus</li>
            <li>Harjutus 3: Kirjeldus</li>
            <li>Harjutus 4: Kirjeldus</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{title: string}>();
//import { title } from 'process';
</script>