// 运行时配置
import './global.less';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import {MICRO_APPS} from 'micro-master/src/constants/index';
 console.log(MICRO_APPS, 'MICRO_APPS');
 export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}
export const layout = () => {
    const layout = {
      logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
      menu: {
        locale: false,
      },
    };
  console.log(window, 'ww');

  if (window.__POWERED_BY_QIANKUN__) {
    layout.menuRender = false;
    layout.headerRender = false;
  } else {
    layout.base = '/react/';
  }
  return layout;
};
export function patchClientRoutes({ routes }) {
  console.log(routes, 'react-routes');
}
