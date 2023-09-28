import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchAddContact } from 'redux/operations';
import { FormThumb } from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Wrong name format'
    )
    .required('Must be filled'),
  phone: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Wrong number format'
    )
    .required('Must be filled'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = { name: '', phone: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        const enteredName = values.name;

        if (
          contacts.some(
            contact => contact.name.toLowerCase() === enteredName.toLowerCase()
          )
        ) {
          alert(`${enteredName} is already in contacts.`);
          return;
        }

        dispatch(fetchAddContact({ ...values }));
        actions.resetForm();
      }}
    >
      <FormThumb>
        <label>
          Name
          <Field name="name" placeholder="Enter name" />
          <ErrorMessage name="name" component="b" />
        </label>

        <label>
          Number
          <Field type="tel" name="phone" placeholder="Enter number" />
          <ErrorMessage name="phone" component="b" />
        </label>

        <button type="submit">Add contact</button>
      </FormThumb>
    </Formik>
  );
};
