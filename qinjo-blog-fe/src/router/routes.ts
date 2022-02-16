import RouterEnum from '@/plugins/enums/routes.enums';
import { RouteRecordRaw } from 'vue-router';
import AppLayout from '../pages/layout/index.vue';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: AppLayout,
    redirect: {
      name: RouterEnum.HOME
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/modules/home.vue')
      },
    ]
  }
] as RouteRecordRaw [];

export default routes;
