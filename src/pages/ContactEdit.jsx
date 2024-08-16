import { useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Formik } from 'formik';
import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { fetchEditContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { toast, Toaster } from 'react-hot-toast';
import { Box } from 'components/GlobalStyle';
import { ContactEditStyle, FormThumb, GoBackLink } from './ContactEdit.styled';
import { contactSchema } from 'schemas/contactSchema';

export default function ContactEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');
  const { contactId } = useParams();
  const allContacts = useSelector(selectContacts);

  const currentContact = allContacts.find(contact => contact._id === contactId);
  const withoutCurrentContact = allContacts.filter(
    contact => contact.name !== currentContact.name
  );

  const initialValues = {
    name: currentContact ? currentContact.name : '',
    phone: currentContact ? currentContact.phone : '',
  };

  const handleSubmit = values => {
    const updatedContact = {
      name: values.name,
      phone: values.phone,
      contactId,
    };

    const editedName = values.name;
    if (
      withoutCurrentContact.some(
        contact => contact.name.toLowerCase() === editedName.toLowerCase()
      )
    ) {
      // toast.dismiss(toastLoading);
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
    // toast.dismiss(toastLoading);
    toast.success(`Contact of ${updatedContact.name} is updated!`, {
      duration: 2000,
      position: 'top-center',
    });
    setTimeout(() => {
      navigate(-1);
    }, 2200);
  };

  return (
    <HelmetProvider>
      <GoBackLink to={backLocationRef.current}>
        <RiArrowLeftCircleFill /> Go back
      </GoBackLink>

      <Box>
        <Helmet>
          <title>Edit contact</title>
        </Helmet>

        <h2>Let's edit your contact</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          <FormThumb>
            <label>
              Contact's name
              <Field
                type="text"
                name="name"
                placeholder={`${currentContact.name}`}
              />
              <ErrorMessage name="name" component="b" />
            </label>
            <label>
              Contact's phone
              <Field
                type="tel"
                name="phone"
                placeholder={`${currentContact.phone}`}
              />
              <ErrorMessage name="phone" component="b" />
            </label>
            <button type="submit">Confirm changes</button>
          </FormThumb>
        </Formik>
        <Toaster />
        <ContactEditStyle />
      </Box>
    </HelmetProvider>
  );
}
