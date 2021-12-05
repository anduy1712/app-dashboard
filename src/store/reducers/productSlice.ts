import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type Product = {
  title?: string;
  price?: number;
  quantites?: string;
  description?: string;
  categoryId?: string;
  createdAt?: number;
  images?: Array<String>;

}
// Define a type for the slice state
type CounterState = {
  products: Array<Product>;
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get(
      'https://shopee-clone-json.herokuapp.com/products'
    );
    return response.data;
  }
);

export const getProduct = createAsyncThunk(
  'products/getProduct',
  async (id: string) => {
    if (id === ':slug') id = '1';
    const response = await axios.get(
      `https://shopee-clone-json.herokuapp.com/products/${id}`
    );
    return response.data;
  }
);

export const postProducts = createAsyncThunk(
  'products/postProducts',
  async (product: Product) => {
    const response = await axios.post(
      'https://shopee-clone-json.herokuapp.com/products',
      product
    );
    return response.data;
  }
);

// Define the initial state using that type
const initialState: CounterState = {
  products: []
};
export const productSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled.type]: (state, action) => {
      state.products = action.payload;
    },
    [getProduct.fulfilled.type]: (state, action) => {
      state.products = action.payload;
    },
    [postProducts.fulfilled.type]: (state, action) => {
      state.products = [...state.products, action.payload];
    }
  }
});
export const productsSelector = (state: any) => state.products;

//action
// export const { FetchProducts } = productSlice.actions;
