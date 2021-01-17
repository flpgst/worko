import Vue from 'vue';
import VueRouter from 'vue-router';

import Feed from '@/views/Feed.vue';
import Comentarios from '@/views/Comentarios.vue';
import Atividades from '@/views/Atividades.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Feed,
  },
  {
    path: '/comentarios/:postId',
    name: 'Comentarios',
    component: Comentarios,
    props: ({ params }) => ({
      postId: params.postId,
    }),
  },
  {
    path: '/atividades',
    name: 'Atividades',
    component: Atividades,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
