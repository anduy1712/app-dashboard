import React from 'react';
import { Avatar, Badge, Layout, Menu } from 'antd';
import navbar from './Navbar.module.scss';
import {
  SearchOutlined,
  PrinterOutlined,
  MailOutlined,
  CommentOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const Navbar = () => {
  
  return (
    <Header
      className={navbar.nav}
      style={{
        // position: 'fixed',
        zIndex: 1,
        width: '100%',
        background: 'white'
      }}
    >
      <Menu className={`${navbar['nav-menu']}`} theme="light" mode="horizontal">
        <Menu.Item
          className={`${navbar['nav-menu__item']}`}
          key="1"
          icon={<MailOutlined style={{ fontSize: '2.1rem' }} />}
        ></Menu.Item>
        <Menu.Item
          className={`${navbar['nav-menu__item']}`}
          key="2"
          icon={<CommentOutlined style={{ fontSize: '2.1rem' }} />}
        ></Menu.Item>
        <Menu.Item
          className={`${navbar['nav-menu__item']}`}
          key="3"
          icon={<ContactsOutlined style={{ fontSize: '2.1rem' }} />}
        ></Menu.Item>
      </Menu>
      <Menu className={`${navbar['nav-menu']}`} theme="light" mode="horizontal">
        <Menu.Item
          className={`${navbar['nav-menu__item']}`}
          key="1"
          icon={<SearchOutlined style={{ fontSize: '2.1rem' }} />}
        ></Menu.Item>
        <Menu.Item
          className={`${navbar['nav-menu__item']}`}
          key="2"
          icon={<PrinterOutlined style={{ fontSize: '2.1rem' }} />}
        ></Menu.Item>
        <Menu.Item
          className={`${navbar['nav-menu__item']}`}
          key="3"
          icon={<ContactsOutlined style={{ fontSize: '2.1rem' }} />}
        ></Menu.Item>

        <Menu.Item
          className={`${navbar['nav-menu__item']} ${navbar['menu-img']}`}
          key="4"
        >
          <div className="profile-left">
            <p>Duy An</p>
            <span>admin</span>
          </div>
          <Badge dot>
            <Avatar
              src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-2/static/media/avatar-s-11.1d46cc62.jpg"
              size="large"
            />
          </Badge>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
