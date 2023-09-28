import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
// import Home from 'pages/Home';
// import Contacts from 'pages/Contacts';
// import Tasks from 'pages/Tasks';
import { refresh } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
// import Register from 'pages/Register';
// import Login from 'pages/Login';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing session...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/register"
                component={<HomePage />}
              />
            }
          /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/tasks" component={<TasksPage />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
