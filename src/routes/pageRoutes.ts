import { ROUTE } from "../constants/routes";
import Product from "../pages/Product/Product";
import User from "../pages/User/User";

export const pageRoutes = [
  {
    path: Object.values(ROUTE.USER),
    component: User,
    render: true
  },
  {
    path: Object.values(ROUTE.PRODUCT),
    component: Product,
    render: true
  }
];
