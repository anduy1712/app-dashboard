import React, { Fragment } from 'react';
import { Layout } from 'antd';
import { Row } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import content from './Content.module.scss';
import { pageRoutes } from '../../../routes/pageRoutes';
const { Footer, Content } = Layout;

const ContentBoard = () => {
  return (
    <Fragment>
      <Content style={{ minHeight: '100vh' }} className={content.content}>
        <Row gutter={16}>
          <Switch>
            {pageRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Fragment>
  );
};

export default ContentBoard;
