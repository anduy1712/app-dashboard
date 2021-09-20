import React from 'react';
import { Layout } from 'antd';
import layout from './Layout.module.scss';
import ContentBoard from './ContentBoard/ContentBoard';
import Navbar from './Navbar/Navbar';

const LayoutContent = () => {
  return (
    <Layout className={`site-layout ${layout.layout}`}>
      <Navbar />
      <ContentBoard />
    </Layout>
  );
};

export default LayoutContent;
