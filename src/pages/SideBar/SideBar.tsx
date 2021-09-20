import { Layout, Menu } from 'antd';
import { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import sidebar from './SideBar.module.scss';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  //state
  const [collapse, setCollapse] = useState(false);

  const onCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapse}
      onCollapse={onCollapse}
      width={255}
      className={sidebar.sidebar}
    >
      <div className={sidebar.top}>
        <div
          className={`${sidebar['top-logo']} ${
            collapse && sidebar['hide-logo']
          }`}
        >
          <img
            src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-2/static/media/logo.86b72fab.svg"
            alt=""
          />
          <h2>DashBoard </h2>
        </div>
        {/* <Checkbox onChange={onChange}></Checkbox> */}
      </div>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          DashBoards
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Calender
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">
            <Link to={ROUTE.USER.BASE}>List</Link>
          </Menu.Item>
          <Menu.Item key="4">Edit</Menu.Item>
          <Menu.Item key="5">View</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Product">
          <Menu.Item key="6">
            <Link to={ROUTE.PRODUCT.BASE}>List</Link>
          </Menu.Item>
          <Menu.Item key="7">Edit</Menu.Item>
          <Menu.Item key="8">View</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
