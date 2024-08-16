import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import { FormThumb } from './LoginForm.styled';

const formSchema = Yup.object({
  email: Yup.string().email().required('Must be filled'),
  password: Yup.string().min(8).required('Must be filled'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={async (values, actions) => {
        try {
          await dispatch(logIn({ ...values })).unwrap();
          actions.resetForm();
        } catch (error) {
          console.error('Failed to login:', error);
        }
      }}
    >
      <FormThumb autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="b" />
        </label>
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="b" />
        </label>
        <button type="submit">Log In</button>
      </FormThumb>
    </Formik>
  );
};
