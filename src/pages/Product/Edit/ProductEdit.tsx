import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
import './ProductEdit.style.scss';
import { onPreview } from '../../../constants/imageUpload/preview';
import CardCustom from '../../../components/CardCustom/CardCustom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProduct,
  productsSelector
} from '../../../store/reducers/productSlice';
// import { cloneDeep } from 'lodash';

const { Option } = Select;

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

type SlugProduct = {
  slug: string;
};

const ProductEdit = () => {
  const { products } = useSelector(productsSelector);
  const [fileList, setFileList] = useState<any>([{ url: '' }]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  console.log(products);

  const { slug = '1' }: SlugProduct = useParams();
  const onFinish = (values: any) => {
    const newImg = fileList.map((item: any) => {
      return item.thumbUrl;
    });
    values.images = newImg;
    // dispatch(postProducts(values));
    console.log(values);
  };

  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };
  //Bind Data
  const bindDataToForm = () => {
    //Bind data Edit
    form.setFieldsValue(products);

    return products;
  };
  useEffect(() => {
    dispatch(getProduct(slug));
  }, [dispatch, slug]);
  useEffect(() => {
    if (products?.images) {
      setFileList(
        products.images.map((item: any) => {
          return { url: item };
        })
      );
    }
  }, [products]);
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
            initialValues={products && bindDataToForm()}
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

            <Form.Item
              name="categoryId"
              label="Category"
              rules={[{ required: true, message: 'Please select category!' }]}
            >
              <Select placeholder="Select your category">
                <Option value="a1f1d2a2-ed6b-48ae-a31e-018efe7b6180">
                  Jacket
                </Option>
                <Option value="a1f1d2a2-ed6b-48ae-a31e-018efe7b6181">
                  Coat
                </Option>
                <Option value="a1f1d2a2-ed6b-48ae-a31e-018efe7b6182">
                  Dress
                </Option>
              </Select>
            </Form.Item>

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

export default ProductEdit;
