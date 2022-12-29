import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './auth/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterReducer } from './fiterSlice';
import  authReducer  from './auth/authSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
  devTools: true
});

setupListeners(store.dispatch)


