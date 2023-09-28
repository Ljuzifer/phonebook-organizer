import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchAddContact } from 'redux/contacts/operations';
import { FormThumb } from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Wrong name format'
    )
    .required('Must be filled'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Wrong number format'
    )
    .required('Must be filled'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = { name: '', number: '' };

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
          <Field type="tel" name="number" placeholder="Enter number" />
          <ErrorMessage name="number" component="b" />
        </label>

        <button type="submit">Add contact</button>
      </FormThumb>
    </Formik>
  );
}
