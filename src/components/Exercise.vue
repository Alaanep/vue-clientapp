<template>
    <div>{{exercise.name}}: {{exercise.description}}</div>
</template>

<script setup lang="ts">
import {Exercise} from '@/model/exercise';
defineProps<{exercise: Exercise}>();
</script>