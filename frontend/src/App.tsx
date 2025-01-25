import { Button, Space, DatePicker, version } from 'antd';
import TitleBar from './components/TitleBar';

const App = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    background: '#f5f5f5'
  }}>
    <TitleBar />
    <div style={{ 
      padding: '16px',
      flex: 1,
      overflow: 'auto',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '6px',
        padding: '20px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ margin: '0 0 16px 0' }}>antd version: {version}</h1>
        <Space>
          <DatePicker />
          <Button type="primary" style={{ width: '100%' }}>Primary Button</Button>
        </Space>
      </div>
    </div>
  </div>
);

export default App;