import { ROUTE } from '../constants/routes';
import Product from '../pages/Product/Product';
import User from '../pages/User/User';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import ProductCreate from '../pages/Product/Create/ProductCreate';
export const sidebarRoutes = [
  {
    path: ROUTE.USER.BASE,
    title: 'User',
    component: User,
    icon: <UserOutlined />,
    render: true
  },
  {
    path: ROUTE.PRODUCT.BASE,
    title: 'Product',
    component: Product,
    icon: <TeamOutlined />,
    render: true,
    children: [
      {
        path: ROUTE.PRODUCT.LIST,
        title: 'List',
        component: ProductCreate,
        render: true
      },
      {
        path: ROUTE.PRODUCT.EDIT,
        title: 'Edit',
        component: Product,
        render: true
      }
    ]
  }
];
