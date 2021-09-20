import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  Button,
  Layout
} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddUser, SearchUser, User } from '../../../store/reducers/userSlice';
import styles from './CreateData.module.scss';
const CreateData = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<User>({});
  const [visible, setVisible] = useState(false);
  const toggleCreate = () => {
    setVisible(!visible);
  };
  const onFinish = (values: any) => {
    const newUser = { ...values, id: uuidv4() };
    dispatch(AddUser(newUser));
    setVisible(!visible);
  };
  const searchValue = (e: any) => {
    dispatch(SearchUser(String(e.target.value)));
  };
  return (
    <Layout className={styles.create}>
      <div className={`${styles['create-left']}`}>
        <Input placeholder="Basic usage" onChange={searchValue} />
        <Button onClick={toggleCreate} type="primary">
          Add New User
        </Button>
        <Modal
          title="Edit Data"
          centered
          visible={visible}
          footer={null}
          // onOk={closeModal}
          onCancel={toggleCreate}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={newUser}
            onFinish={onFinish}
          >
            <Form.Item name="name" label="Name:">
              <Input />
            </Form.Item>
            <Form.Item name="username" label="Username:">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email:">
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone:">
              <Input />
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Select>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="birthday" label="Birthday:">
              <DatePicker />
            </Form.Item>
            <Form.Item name="status" label="Status:" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </div>
    </Layout>
  );
};

export default CreateData;
