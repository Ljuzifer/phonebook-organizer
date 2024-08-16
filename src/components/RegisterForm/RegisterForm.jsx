import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { FormThumb } from './RegisterForm.styled';
import { Link, useNavigate } from 'react-router-dom';
// import LoadingSpinnerComponent from 'react-spinners-components';

const formSchema = Yup.object({
  name: Yup.string().required('Must be filled'),
  email: Yup.string().email().required('Must be filled'),
  password: Yup.string().min(8).required('Must be filled'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     register({
  //       name: form.elements.name.value,
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  const initialValues = { name: '', email: '', password: '' };

  return (
    <>
      <h2>Registration Form</h2>
      <h5>
        Have an account already? <Link to="/login">Sign Up</Link> please!
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={async (values, actions) => {
          // dispatch(register({ ...values }));
          // actions.resetForm();
          try {
            await dispatch(register({ ...values })).unwrap();
            actions.resetForm();
            navigate('/login');
          } catch (error) {
            console.error('Failed to register:', error);
          }
        }}
      >
        <FormThumb autoComplete="off">
          <label name="name">
            Username
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="b" />
          </label>
          <label name="email">
            Email
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="b" />
          </label>
          <label name="password">
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="b" />
          </label>
          <button type="submit">Register</button>
        </FormThumb>
      </Formik>
    </>
  );
}

// {/* <LoadingSpinnerComponent type={'Gear'} color={'black'} size={'88px'} />; */}
