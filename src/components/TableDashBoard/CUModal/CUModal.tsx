import {
  Modal,
  Form,
  Input,
  Select,
  Switch,
  Button,
  Tag,
  Upload,
  message
} from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onPreview } from '../../../constants/imageUpload/preview';
import {
  AddUser,
  EditUser,
  User,
  userSelector
} from '../../../store/reducers/userSlice';
import { Props } from './CUModal.type';

const CUModal = (props: Props) => {
  const [fileList, setFileList] = useState<any>([
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ]);
  //Store
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  const [form] = Form.useForm();
  const formEl = useRef(null);
  //Bind Data
  const bindDataToForm = (id: number | null) => {
    //Bind data Edit
    if (id) {
      const data = user.filter((item: User): boolean => item.id === id);
      const newData = data.map((item: any) => {
        const getFullName = item.name.firstname + ' ' + item.name.lastname;
        return { ...item, fullName: getFullName };
      });
      form.setFieldsValue(newData[0]);
      return data[0];
    }
    //Bind data Create
    form.setFieldsValue({ name: '', email: '', username: '', phone: '' });
    return { name: '', email: '', username: '', phone: '' };
  };
  //Upload Image
  const onChange = ({
    fileList: newFileList
  }: UploadChangeParam<UploadFile<any>>) => {
    setFileList(newFileList);
  };
  //Form Submit
  const onSubmitForm = (values: User) => {
    if (!fileList[0]?.thumbUrl)
      return message.error('This is an error message');
    //MODE Edit
    if (props.mode === 'MODAL_EDIT') {
      const formEdit = {
        ...values,
        id: 1,
        photoImage: fileList[0].thumbUrl ? fileList[0].thumbUrl : ''
      };
      dispatch(EditUser(formEdit));
      //MODE Create
    } else {
      const formCreate = {
        ...values,
        id: 1,
        photoImage: fileList[0].thumbUrl ? fileList[0].thumbUrl : ''
      };
      dispatch(AddUser(formCreate));
    }
    props.onClose();
  };


  return (
    <Modal
      title={props.mode === 'MODAL_EDIT' ? 'MODAL_EDIT' : 'MODAL_CREATE'}
      centered
      visible={props.visible}
      footer={null}
      // onOk={closeModal}
      onCancel={props.onClose}
      getContainer={false}
      forceRender
    >
      <Form
        form={form}
        ref={formEl}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={
          props.dataId && props.mode === 'MODAL_EDIT'
            ? bindDataToForm(props.dataId)
            : bindDataToForm(props.dataId)
        }
        onFinish={onSubmitForm}
      >
        <ImgCrop rotate>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
        <Form.Item name="fullName" label="Full Name:">
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default CUModal;
