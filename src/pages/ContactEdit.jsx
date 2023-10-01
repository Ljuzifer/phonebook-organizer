import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { fetchEditContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { toast, Toaster } from 'react-hot-toast';
import { toastLoading } from 'redux/contacts/contactsSlice';
import { ContactEditStyle, FormThumb, GoBackLink } from './ContactEdit.styled';
import { Box } from 'components/GlobalStyle';

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

export default function ContactEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');
  const { contactId } = useParams();
  const allContacts = useSelector(selectContacts);
  const currentContact = allContacts.find(contact => contact.id === contactId);

  const initialValues = {
    name: currentContact ? currentContact.name : '',
    number: currentContact ? currentContact.number : '',
  };

  const handleSubmit = values => {
    const updatedContact = {
      name: values.name,
      number: values.number,
      contactId,
    };

    const editedName = values.name;
    if (
      allContacts.some(
        contact => contact.name.toLowerCase() === editedName.toLowerCase()
      )
    ) {
      toast.dismiss(toastLoading);
      toast.success(
        `Oops! ${editedName} is already exists!!! Please change it...`,
        {
          duration: 2000,
          position: 'top-center',
        }
      );
      return;
    }

    dispatch(fetchEditContact(updatedContact));
    toast.dismiss(toastLoading);
    toast.success(`Contact of ${updatedContact.name} is updated!`, {
      duration: 2000,
      position: 'top-center',
    });
    setTimeout(() => {
      navigate(-1);
    }, 2200);
  };

  return (
    <>
      <GoBackLink to={backLocationRef.current}>
        <RiArrowLeftCircleFill /> Go back
      </GoBackLink>

      <Box>
        <Helmet title="Edit contact" />

        <h2>Let's edit your contact</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={handleSubmit}
        >
          <FormThumb>
            <label>
              <Field
                type="text"
                name="name"
                placeholder={`${currentContact.name}`}
              />
              <ErrorMessage name="name" component="b" />
            </label>
            <label>
              <Field
                type="tel"
                name="number"
                placeholder={`${currentContact.number}`}
              />
              <ErrorMessage name="number" component="b" />
            </label>
            <button type="submit">Confirm changes</button>
          </FormThumb>
        </Formik>
        <Toaster />
        <ContactEditStyle />
      </Box>
    </>
  );
}
