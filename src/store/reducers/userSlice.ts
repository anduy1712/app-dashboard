import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  id?: number;
  photoImage?: string;
  name?: object;
  username?: string;
  password?: string;
  email?: string;
  author?: number;
  address?: object;
  phone?: number;
  // birthday?: Moment;
}
// Define a type for the slice state
interface CounterState {
  user: Array<User>;
  userRoot: Array<User>;
  detail: User[];
}

// Define the initial state using that type
const initialState: CounterState = {
  user: [],
  userRoot: [],
  detail: [{}]
};
export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await axios.get(
    'https://shopee-clone-json.herokuapp.com/users'
  );
  return response.data;
});
export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    FetchUser: (state) => {
      state.user = [];
    },
    DeleteUser: (state, action) => {
      state.user = state.user.filter((item) => item.id !== action.payload);
    },
    AddUser: (state, action) => {
      state.user = [...state.user, action.payload];
    },
    AddDetail: (state, action) => {
      state.detail = action.payload;
    },
    FetchDetail: (state, action) => {
      state.detail = state.user.filter((item) => item.id === action.payload);
    },
    EditUser: (state, action) => {
      const { id } = action.payload;
      const editUser = state.user.map((item) => {
        if (item.id === id) return (item = action.payload);
        return item;
      });
      state.user = editUser;
      // state.user = [...state.user, action.payload];
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    SearchUser: (state, action) => {
      const cloneData = [...state.userRoot];
      state.user = cloneData.filter(
        (item) =>
          item.username?.toLowerCase().indexOf(action.payload.toLowerCase()) !==
          -1
      );
    }
  },
  extraReducers: {
    [getUser.fulfilled.type]: (state, action) => {
      state.userRoot = action.payload;
      state.user = action.payload;
    }
  }
});
export const userSelector = (state: any) => state.user;

//action
export const {
  FetchUser,
  FetchDetail,
  AddDetail,
  DeleteUser,
  AddUser,
  SearchUser,
  EditUser
} = userSlice.actions;
