import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/index',
      component: '@/pages/index',
    },
    {
      path: '/:id',
      component: '@/pages/[id]',
    },
    {
      path: '/404',
      component: '@/pages/404',
    },
  ],
  fastRefresh: {},
  // 只需要 dev，这么配
  mfsu: {},
  // 如果需要针对生产环境生效，这么配
  // mfsu: { production: { output: '.mfsu-production' } },
});
