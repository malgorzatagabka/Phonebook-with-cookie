import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import Cookies from 'js-cookie';

const token = Cookies.get('token')
  ? Cookies.get('token')
  : null;

const initialState = {
  user: { name: null, email: null },
  token,
  isLoggedIn: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload;
    },
  },

  extraReducers: builder => {
    builder.addMatcher(
      contactsApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      contactsApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      contactsApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        if (payload.status === 400) {
          state.isError = true;
        }
      }
    );
    builder.addMatcher(contactsApi.endpoints.logout.matchFulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      contactsApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }
    );
  },
});

export default authSlice.reducer;
export const { setCredentials } = authSlice.actions;
