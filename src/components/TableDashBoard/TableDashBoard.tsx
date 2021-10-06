import { Col, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/reducers/userSlice';
const TableDashBoard = (props: any) => {
  //Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Col className="gutter-row" span={24}>
      <Table
        columns={props.headers}
        dataSource={props.data ? props.data : []}
      />
    </Col>
  );
};

export default TableDashBoard;
