import { createGlobalStyle } from 'styled-components';
import contactsImage from '../images/contacts.jpg';

export const ContactsGlobalStyle = createGlobalStyle`
body{
      /* background-image: url('https://bogatyr.club/uploads/posts/2023-03/1679420906_bogatyr-club-p-biblioteka-oboi-foni-pinterest-1.jpg'); */

      background-image: url(${contactsImage});
}`;
