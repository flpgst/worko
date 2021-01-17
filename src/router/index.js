import Vue from 'vue';
import VueRouter from 'vue-router';

import Feed from '@/views/Feed.vue';
import Comentarios from '@/views/Comentarios.vue';
import Perfil from '@/views/Perfil.vue';
import Atividades from '@/views/Atividades.vue';
import Educacao from '@/views/Educacao.vue';
import CadastroEstudante from '@/views/CadastroEstudante.vue';

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
  {
    path: '/educacao-e-desenvolvimento',
    name: 'educacao-e-desenvolvimento',
    component: Educacao,
  },
  {
    path: '/cadastro-estudante',
    name: 'cadastro-estudante',
    component: CadastroEstudante,
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
