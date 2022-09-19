import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import ExerciseVue from '@/components/Exercise.vue';
import AddExerciseVue from '@/components/AddExerciseForm.vue';
import { create } from 'domain';

const routes: Array<RouteRecordRaw>=[
    {
        path:'/',
        name: 'Harjutused',
        component: ExerciseVue,
        props: {title: 'Harjutused'},
    },
    {
        path: '/newexercise',
        name: 'Lisa harjutus',
        component: AddExerciseVue,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;