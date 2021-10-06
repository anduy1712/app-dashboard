import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchValue from '../../components/Search/SearchValue';
import TableDashBoard from '../../components/TableDashBoard/TableDashBoard';
import { userSelector } from '../../store/reducers/userSlice';
import { Space, Button, Tag, Layout, Input, Col } from 'antd';
import CUModal from '../../components/TableDashBoard/CUModal/CUModal';
import DeleteData from '../../components/TableDashBoard/DeleteData/DeleteData';
import './User.style.scss';

const User = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibletwo, setVisibleTwo] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<number | null>(null);

  //Get Data User
  const { user } = useSelector(userSelector);
  //Action for table
  const userEdit = (obj: any) => {
    setVisible(true);
    setDataEdit(true);
    setIdUser(obj.id);
  };

  const DeleteItemTable = (id: number) => {
    setVisibleTwo(true);
    setIdUser(id);
  };
  //Headers for table
  const headers = [
    {
      title: 'User',
      dataIndex: 'username',
      key: 'username',
      render: (text: any, record: any) => (
        <div className="box">
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
          <Button onClick={() => userEdit(record)} type="primary">
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
    <Fragment>
      <SearchValue />
      <Col className="gutter-row" span={24}>
        <Layout className="create">
          <div className="create-left">
            <Input placeholder="Basic usage" />
            <Button
              onClick={() => {
                setVisible(true);
                setDataEdit(false);
                setIdUser(null);
              }}
              type="primary"
            >
              Add New User
            </Button>
          </div>
        </Layout>
      </Col>

      <TableDashBoard headers={headers} data={user} />
      <CUModal
        mode={dataEdit ? 'MODAL_EDIT' : 'MODAL_CREATE'}
        visible={visible}
        onClose={() => setVisible(false)}
        dataId={idUser}
      />
      <DeleteData
        visible={visibletwo}
        onClose={() => setVisibleTwo(false)}
        dataId={idUser}
      />
    </Fragment>
  );
};

export default User;
