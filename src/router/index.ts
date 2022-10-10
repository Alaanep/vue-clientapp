import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import PeopleVue from '@/views/People.vue';
import AddPersonVue from '@/views/AddPerson.vue';
import { create } from 'domain';

const routes: Array<RouteRecordRaw>=[
    {
        path:'/',
        name: 'People',
        component: PeopleVue,
        props: {title: 'People'},
    },
    {
        path: '/newPerson',
        name: 'Add Person',
        component: AddPersonVue,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;