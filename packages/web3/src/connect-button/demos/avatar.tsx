import { ConnectButton } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <ConnectButton
        account={{
          address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18',
          name: 'Display custom avatar',
        }}
        avatar={{
          src: 'https://avatars.githubusercontent.com/u/10286961?s=60&v=4',
        }}
        actionsMenu={false}
      />
    </Space>
  );
};

export default App;
