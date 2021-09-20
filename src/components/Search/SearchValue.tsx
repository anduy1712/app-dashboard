import React from 'react';
import style from './SearchValue.module.scss';
import { Row, Col, Layout, Select } from 'antd';

const SearchValue = () => {
  const { Option } = Select;

  const filterValue = (value: string) => {
    console.log(value);
  };
  return (
    <Col className="gutter-row" span={24}>
      <Layout className={style.search}>
        <h2>Search Filter</h2>
        <Row gutter={[24, 2]}>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Select
              onChange={filterValue}
              placeholder="Select Role"
              style={{ width: '100%' }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Select placeholder="Select Plan" style={{ width: '100%' }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
          <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 8 }}>
            <Select placeholder="Select Status" style={{ width: '100%' }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Col>
        </Row>
      </Layout>
    </Col>
  );
};

export default SearchValue;
