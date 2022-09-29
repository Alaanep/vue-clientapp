import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import ExercisesVue from '@/views/Exercises.vue';
import AddExerciseVue from '@/views/AddExercise.vue';
import { create } from 'domain';

const routes: Array<RouteRecordRaw>=[
    {
        path:'/',
        name: 'Tudengid',
        component: ExercisesVue,
        props: {title: 'Tudengid'},
    },
    {
        path: '/newexercise',
        name: 'Lisa tudeng',
        component: AddExerciseVue,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;