import styled, { createGlobalStyle } from 'styled-components';
import ContactsImage from '../images/contacts.jpg';

export const ContactsGlobalStyle = createGlobalStyle`
body{
      background-image: url(${ContactsImage});
}`;

export const ContactsDesk = styled.div`
  /* @media (min-width: 1280px) {
    display: flex;
    gap: 20px;
  } */
`;
