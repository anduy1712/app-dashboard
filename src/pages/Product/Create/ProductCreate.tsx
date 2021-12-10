import { useEffect, useState } from 'react';
import {
  Row,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
  Button,
  Upload
} from 'antd';
import ImgCrop from 'antd-img-crop';
import './ProductCreate.style.scss';
import { onPreview } from '../../../constants/imageUpload/preview';
import CardCustom from '../../../components/CardCustom/CardCustom';
import { useDispatch } from 'react-redux';
import { postProducts, Product } from '../../../store/reducers/productSlice';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import useLocations from '../../../constants/hooks/useLocations';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 }
  }
};

const ProductCreate = () => {
  const [state, setSelectedCity, setSelectedDistrict, setSelectedWard] =
    useLocations();
  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard
  } = state;
  console.log(state);
  //State
  const [fileList, setFileList] = useState<any>([]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onChange = ({
    fileList: newFileList
  }: UploadChangeParam<UploadFile<any>>) => {
    setFileList(newFileList);
  };

  const onFinish = (values: Product) => {
    const newImg = fileList.map((item: any) => {
      return item.thumbUrl;
    });
    values.images = newImg;
    dispatch(postProducts(values));
  };
  useEffect(() => {
    form.setFieldsValue({
      cityId: selectedCity,
      districtId: selectedDistrict,
      wardId: selectedWard
    });
  }, [form, selectedCity, selectedDistrict, selectedWard]);
  return (
    <>
      <Col span={16}>
        <CardCustom title="Product">
          <Form
            {...formItemLayout}
            layout="vertical"
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
              cityId: selectedCity,
              districtId: selectedDistrict
            }}
            scrollToFirstError
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Title'
                }
              ]}
            >
              <Input placeholder="Type here" />
            </Form.Item>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="Quantity">
                  <Form.Item
                    name="quantites"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Quantity'
                      }
                    ]}
                  >
                    <InputNumber
                      className="input-number-cus"
                      placeholder="Quantity"
                      min={1}
                      max={1000}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Price">
                  <Form.Item
                    name="price"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Price'
                      }
                    ]}
                  >
                    <InputNumber
                      className="input-number-cus"
                      placeholder="200.000đ"
                      min={1}
                      max={10000000}
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item name="cityId" label="city">
                  <Select
                    options={cityOptions}
                    placeholder="Select your city"
                    onChange={(value) => setSelectedCity(value)}
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="districtId" label="district">
                  <Select
                    disabled={districtOptions.length === 0}
                    options={districtOptions}
                    onChange={(value) => setSelectedDistrict(value)}
                    placeholder="Select your district"
                  ></Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="wardId" label="ward">
                  <Select
                    disabled={wardOptions.length === 0}
                    options={wardOptions}
                    onChange={(value) => setSelectedWard(value)}
                    placeholder="Select your ward"
                  ></Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="description"
              label="Description"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your description!',
                  whitespace: true
                }
              ]}
            >
              <Input.TextArea rows={10} placeholder="Type here" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </CardCustom>
        {/* <Layout className="product-create">
      </Layout> */}
      </Col>
      <Col span={8}>
        <CardCustom title="Media">
          <ImgCrop rotate>
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </CardCustom>
      </Col>
    </>
  );
};

export default ProductCreate;
