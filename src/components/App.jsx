import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import Contacts from 'pages/Contacts';
import Tasks from 'pages/Tasks';
import { refresh } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing session...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      {/* <Route path="/register" /> */}
      {/* <Route path="/login" /> */}
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/tasks" element={<Tasks />} />

      <GlobalStyle />
    </Routes>
  );
};
