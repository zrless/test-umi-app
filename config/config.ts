import { defineConfig } from 'umi';
// import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  // routes,
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    {
      path: '/index',
      component: '@/pages/index',
      menu: {
        name: '主页',
        // icon: 'testicon',
        flatMenu: false,
        hideInMenu: false,
        hideChildrenInMenu: false,
      },
    },
    {
      path: '/404',
      component: '@/pages/404',
    },
    {
      path: '/app1',
      microApp: 'app1',
      menu: {
        name: 'umi子应用',
        flatMenu: false,
        hideInMenu: false,
        hideChildrenInMenu: false,
      },
    },
    {
      path: '/crm-web',
      microApp: 'crm-web',
      menu: {
        name: '客户关系管理',
        // icon: 'testicon',
        flatMenu: false,
        hideInMenu: false,
        hideChildrenInMenu: false,
      },
    },
    {
      path: '/sales-system-web',
      microApp: 'sales-system-web',
      menu: {
        name: '收钱吧掌柜',
        // icon: 'testicon',
        flatMenu: false,
        hideInMenu: false,
        hideChildrenInMenu: false,
      },
    },
  ],
  fastRefresh: {},
  // 只需要 dev，这么配
  mfsu: {},
  webpack5: {},
  // 如果需要针对生产环境生效，这么配
  // mfsu: { production: { output: '.mfsu-production' } },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8081/', // html entry
        },
        {
          name: 'crm-web', // 唯一 id
          entry: '//localhost:8090/', // html entry
        },
        {
          name: 'sales-system-web', // 唯一 id
          entry: '//localhost:9000/', // html entry
        },
      ],
      routes: [
        {
          path: '/sales-system-web',
          microApp: 'sales-system-web',
        },
        {
          path: '/crm-web',
          microApp: 'crm-web',
        },
      ],
      // sandbox: false,
    },
  },
  // proxy: {
  //   "/v4": {
  //     "target": "http://localhost:9000/",
  //     "changeOrigin": true,
  //     "pathRewrite": {
  //       "^/v4": ""
  //     }
  //   }
  // },
});
