import menus from './menus';
const { data } = menus;
const routes = data.map((item: any) => {
  console.log(item);
  return {
    path: '/crm-web',
    microApp: 'crm-web',
    menu: {
      name: item.name,
      flatMenu: false,
      hideInMenu: false,
      hideChildrenInMenu: false,
    },
    routes: item.children.map((cItem: any) => {
      return {
        path: '/crm-web',
        microApp: 'crm-web',
        menu: {
          name: cItem.name,
          flatMenu: false,
          hideInMenu: false,
          hideChildrenInMenu: false,
        },
      };
    }),
  };
});

export default routes;
