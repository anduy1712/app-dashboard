import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import sidebar from './SideBar.module.scss';
import { NavLink } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { sidebarRoutes } from '../../routes/sidebarRoutes';
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  //state
  const [collapse, setCollapse] = useState(false);
  const [selectedKey, setSelectedKey] = useState(pathname);

  const onCollapse = () => {
    setCollapse(!collapse);
  };

  useEffect(() => {
    setSelectedKey(pathname);
  }, [location, pathname]);
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
          <h2>DashBoard</h2>
          <div className={sidebar.circle} onClick={onCollapse}>
            <div className={collapse ? '' : sidebar.circleactive}></div>
          </div>
        </div>
        {/* <Checkbox onChange={onChange}></Checkbox> */}
      </div>
      <Menu selectedKeys={[selectedKey]} theme="light" mode="inline">
        {sidebarRoutes.map((item, index) => {
          return (
            <>
              {/* <Menu.Item key={String(item.path)} icon={item.icon}>
                <NavLink to={String(item.path)}>{item.title}</NavLink>
              </Menu.Item> */}
              {item?.children ? (
                <SubMenu
                  key={String(item.path)}
                  title={item.title}
                  icon={item.icon}
                >
                  {item.children.map((item, index) => {
                    return (
                      <Menu.Item key={String(item.path)}>
                        <NavLink to={String(item.path)}>{item.title}</NavLink>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item key={String(item.path)} icon={item.icon}>
                  <NavLink to={String(item.path)}>{item.title}</NavLink>
                </Menu.Item>
              )}
            </>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;
