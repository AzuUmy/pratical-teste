import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

      {
         path: '',
         name: '',
         component: () => import('../views/main-page-view.vue'),
      },

        {
            path: '/create',
            name: 'create',
            component: () => import('../views/create-item-view.vue'),
        },
    ],
});

export default router;