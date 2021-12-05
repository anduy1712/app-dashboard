import React from 'react';
import { Layout } from 'antd';
import './CardCustom.style.scss';

type Props = {
  title?: 'Title' | string;
  children: any;
};

const CardCustom = (props: Props) => {
  return (
    <Layout className="card">
      {props.title && (
        <div className="card-header">
          <h2>{props.title}</h2>
        </div>
      )}
      <div className="card-body">
        <p> {props.children}</p>
      </div>
    </Layout>
  );
};

export default CardCustom;
