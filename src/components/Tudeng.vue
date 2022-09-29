<template>
    <div>{{tudeng.martiklinr}}: {{tudeng.eesnimi}}: {{tudeng.perenimi}}: {{tudeng.staatus}}</div>
</template>

<script setup lang="ts">
import {Tudeng} from '@/model/tudeng';
defineProps<{tudeng: Tudeng}>();
</script>