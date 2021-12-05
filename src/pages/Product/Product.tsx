import React from 'react';
import { Route, Switch } from 'react-router';
import { productRoutes } from '../../routes/productRoutes';

const Product = () => {
  return (
    <Switch>
      {productRoutes.map((item, index) => {
        return (
          <Route
            key={index}
            exact
            path={item.path}
            component={item.component}
          />
        );
      })}
    </Switch>
  );
};

export default Product;
