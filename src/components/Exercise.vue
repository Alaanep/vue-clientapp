<template>
    <div>{{exercise.martiklinr}}: {{exercise.eesnimi}}: {{exercise.perenimi}}: {{exercise.staatus}}</div>
</template>

<script setup lang="ts">
import {Exercise} from '@/model/exercise';
defineProps<{exercise: Exercise}>();
</script>