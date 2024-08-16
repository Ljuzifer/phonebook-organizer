import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Spinner from './Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authOperations';

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    <>
      <div style={{ maxWidth: 1000, margin: '8px auto 0', padding: '0 16px' }}>
        <AppBar />
      </div>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
