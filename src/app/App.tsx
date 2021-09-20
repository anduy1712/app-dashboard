import SideBar from '../pages/SideBar/SideBar';
import { Layout } from 'antd';
import LayoutContent from '../pages/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <Layout className="theme-light">
      <BrowserRouter>
        <SideBar />
        <LayoutContent />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
