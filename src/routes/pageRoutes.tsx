import { ROUTE } from '../constants/routes';
import Product from '../pages/Product/Product';
import User from '../pages/User/User';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
export const pageRoutes = [
  {
    path: Object.values(ROUTE.USER),
    title: 'User',
    component: User,
    icon: <UserOutlined />,
    render: true
  },
  {
    path: Object.values(ROUTE.PRODUCT),
    title: 'Product',
    component: Product,
    icon: <TeamOutlined />,
    render: true
  }
];
