import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
// import { refresh } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const TasksPage = lazy(() => import('../pages/Tasks'));
const ContactEditPage = lazy(() => import('../pages/ContactEdit'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
              <PrivateRoute redirectTo="/" component={<ContactsPage />} />
            }
          />
          <Route
            path="/contacts/:contactId"
            element={
              <PrivateRoute
                redirectTo="/contacts"
                component={<ContactEditPage />}
              />
            }
          />
          <Route
            path="/tasks"
            element={<PrivateRoute redirectTo="/" component={<TasksPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster />
      <GlobalStyle />
    </>
  );
};
