import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from '@umijs/max';
export default () => {
  return <PageContainer style={{ zIndex: 111 }}>{<Outlet />}</PageContainer>;
};
