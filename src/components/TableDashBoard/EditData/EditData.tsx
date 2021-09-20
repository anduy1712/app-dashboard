import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  Switch,
  Button,
  Tag,
  Upload,
  message
} from 'antd';
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onPreview } from '../../../constants/imageUpload/preview';
import {
  EditUser,
  User,
  userSelector
} from '../../../store/reducers/userSlice';

type EditDataType = {
  open?: any;
  toggleModal: boolean;
  // data: User;
}

const EditData = ({ toggleModal, open }: EditDataType) => {
  const { detail } = useSelector(userSelector);
  const dispatch = useDispatch();
  // const [userModal, setUserModal] = useState<User>(data);
  // setUserModal(data)
  const [fileList, setFileList] = useState<any>([]);
  //Upload Image
  const onChange = ({ fileList: newFileList }:any) => {
    setFileList(newFileList);
  };
  //Form Submit
  const onFinish = (values: User) => {
    const formEdit = {
      ...values,
      id: detail.id,
      photoImage: fileList[0].thumbUrl ? fileList[0].thumbUrl : ''
    };
    dispatch(EditUser(formEdit));
    open();
  };
  const submitForm: any = useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(detail);
  }, [detail]);

  return (
    <Modal
      title={detail.username}
      centered
      visible={toggleModal}
      footer={null}
      // onOk={closeModal}
      onCancel={open}
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={detail}
        onFinish={onFinish}
      >
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            // fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
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
        <Form.Item name="author" label="Gender">
          <Select>
            <Select.Option value={0}>
              <Tag color="geekblue">Admin</Tag>
            </Select.Option>
            <Select.Option value={1}>
              <Tag color="geekblue">Manger</Tag>
            </Select.Option>
            <Select.Option value={2}>
              <Tag color="geekblue">User</Tag>
            </Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item name="birthday" label="Birthday:">
          <DatePicker />
        </Form.Item> */}
        <Form.Item name="status" label="Status:" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Button ref={submitForm} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default EditData;
