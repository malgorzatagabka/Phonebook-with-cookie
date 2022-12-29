import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import Cookie from './Cookies';

export const Layout = () => {
  return (
    <>
      <div style={{ margin: '0 auto', padding: '0 25px' }}>  <AppBar />
      </div>
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      
      <Suspense fallback={null}>
        <Outlet />
        </Suspense>
        <Cookie />
       <ToastContainer autoClose={3000} />
      </div>
      </>
  );
};

