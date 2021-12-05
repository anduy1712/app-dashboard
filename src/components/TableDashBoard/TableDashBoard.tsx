import { Col, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getUser } from '../../store/reducers/userSlice';
import './TableDashBoard.style.scss';

type C_Props = {
  headers: Array<object>;
  data: Array<object>;
  onRowClick?: Boolean;
};

const TableDashBoard = (props: C_Props) => {
  //Dispatch
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <Col className="gutter-row m-4" span={24}>
      <Table
        onRow={(record: any, rowIndex) => {
          return {
            onClick: (event) => {
              if (props.onRowClick) history.push(`./edit/${record.id}`);
            } // click row
          };
        }}
        columns={props.headers}
        dataSource={props.data ? props.data : []}
      />
    </Col>
  );
};

export default TableDashBoard;
