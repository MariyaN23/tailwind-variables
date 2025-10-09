import { createMemoryHistory, createRouter } from 'vue-router'
import Converter from "@/pages/main/Converter.vue";
import FontWeight from '@/pages/font/FontWeight.vue';
import { paths } from "@/routes/paths.ts";

const routes = [
    {
        path: paths.main,
        component: Converter
    },
    {
        path: paths.fontWeight,
        component: FontWeight
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
