import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import TudengiteVue from '@/views/Tudengid.vue';
import LisaTudengVue from '@/views/LisaTudeng.vue';
import { create } from 'domain';

const routes: Array<RouteRecordRaw>=[
    {
        path:'/',
        name: 'Tudengid',
        component: TudengiteVue,
        props: {title: 'Tudengid'},
    },
    {
        path: '/uusTudeng',
        name: 'Lisa tudeng',
        component: LisaTudengVue,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;