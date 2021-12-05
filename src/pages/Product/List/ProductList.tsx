import React, { useEffect } from 'react';
import { Col } from 'antd';
import './ProductList.style.scss';

import TableDashBoard from '../../../components/TableDashBoard/TableDashBoard';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  productsSelector
} from '../../../store/reducers/productSlice';

const headers = [
  {
    title: 'Images',
    dataIndex: 'images',
    key: 'images',
    render: (text: any, record: any) => (
      <div className="box">
        <img className="img-sm" src={record.images[0]} alt="" />
        {/* <div className="box-text">{text}</div> */}
      </div>
    )
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantites',
    key: 'quantites'
  }
];

const ProductList = () => {
  //State

  const dispatch = useDispatch();
  const { products } = useSelector(productsSelector);

  // const onFinish = (values: any) => {
  //   const newImg = fileList.map((item: any) => {
  //     return item.thumbUrl;
  //   });
  //   values.images = newImg;
  //   console.log(values);
  // };
  //Call Product From reduce
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Col span={24}>
        {products.length > 0 && (
          <TableDashBoard headers={headers} data={products} onRowClick={true} />
        )}
      </Col>
    </>
  );
};

export default ProductList;
