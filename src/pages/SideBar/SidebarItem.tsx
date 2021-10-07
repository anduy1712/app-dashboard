import React, { Fragment } from 'react';
import { Menu } from 'antd';
import { Link, NavLink } from 'react-router-dom';

import { PieChartOutlined } from '@ant-design/icons';
const SidebarItem = (props: any) => {
  const { SubMenu } = Menu;

  return (
    <Fragment>
      <Menu.Item key={String(props.path)} icon={props.icon}>
        <NavLink to={String(props.path)}>{props.title}</NavLink>
      </Menu.Item>
      {/* <SubMenu key="sub1"title="User">
        <Menu.Item key="3">
          <Link to="">List</Link>
        </Menu.Item>
        <Menu.Item key="4">Edit</Menu.Item>
        <Menu.Item key="5">View</Menu.Item>
      </SubMenu> */}
    </Fragment>
  );
};

export default SidebarItem;
