import { history } from 'umi';
import { Button, Result } from 'antd';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="页面不存在"
      extra={
        <Button
          type="primary"
          onClick={() => {
            History.push('/home');
          }}
        >
          回到首页
        </Button>
      }
    />
  );
};
