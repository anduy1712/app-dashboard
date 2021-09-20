import { Col, Table, Space, Button, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddDetail, getUser, User, userSelector } from '../../store/reducers/userSlice';
import EditData from './EditData/EditData';
import DeleteData from './DeleteData/DeleteData';
import CreateData from './CreateData/CreateData';
import styles from './TableDashBoard.module.scss';
const TableDashBoard = () => {
  //State
  const [visibletwo, setVisibleTwo] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();

  //Dispatch
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  //Toggle Modal
  const toggleEdit = () => {
    setVisible(!visible);
  };

  const toggleDelete = () => {
    setVisibleTwo(!visibletwo);
  };
  //Action Edit
  const userDetail = (obj: User) => {
    setVisible(true);
    dispatch(AddDetail(obj))
    // setDetail(obj);
  };
  //Action Delete
  const DeleteItemTable = (id: number) => {
    setVisibleTwo(true);
    setUserId(id);
    // dispatch(DeleteUser(id))
  };
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  //Table Item
  const columns = [
    {
      title: 'User',
      dataIndex: 'username',
      key: 'username',
      render: (text: any, record: any) => (
        <div className={styles.box}>
          <img src={record.photoImage} />
          <div className="box-text">{text}</div>
        </div>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Role',
      dataIndex: 'author',
      key: 'author',
      render: (text: any) => (
        <a>
          {text === 0 && <Tag color="geekblue">Admin</Tag>}
          {text === 1 && <Tag color="geekblue">Manger</Tag>}
          {text === 2 && <Tag color="green">User</Tag>}
        </a>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Button onClick={() => userDetail(record)} type="primary">
            Edit
          </Button>
          <Button
            onClick={() => DeleteItemTable(record.id)}
            type="primary"
            danger
          >
            Delete
          </Button>
        </Space>
      )
    }
  ];

  return (
    <Col className="gutter-row" span={24}>
      <CreateData />
      <Table columns={columns} dataSource={user ? user : []} />
      <EditData toggleModal={visible} open={toggleEdit}  />
      <DeleteData
        toggleModal={visibletwo}
        open={toggleDelete}
        dataId={userId}
      />
    </Col>
  );
};

export default TableDashBoard;
