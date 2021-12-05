import { ROUTE } from '../constants/routes';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import ProductCreate from '../pages/Product/Create/ProductCreate';
import ProductEdit from '../pages/Product/Edit/ProductEdit';
import ProductList from '../pages/Product/List/ProductList';
export const productRoutes = [
  {
    path: ROUTE.PRODUCT.LIST,
    title: 'LIST',
    component: ProductList,
    icon: <UserOutlined />,
    render: true
  },
  {
    path: ROUTE.PRODUCT.CREATE,
    title: 'CREATE',
    component: ProductCreate,
    icon: <UserOutlined />,
    render: true
  },
  {
    path: ROUTE.PRODUCT.EDIT,
    title: 'Edit',
    component: ProductEdit,
    icon: <TeamOutlined />,
    render: true
  }
];
