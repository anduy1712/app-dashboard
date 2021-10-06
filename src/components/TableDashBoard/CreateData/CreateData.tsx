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
       
      </div>
    </Layout>
  );
};

export default CreateData;
