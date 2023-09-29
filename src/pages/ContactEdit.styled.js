import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';

export const ContactEditStyle = createGlobalStyle`
body{
    background-image: url('https://kartinki.pics/uploads/posts/2021-07/1625655312_1-kartinkin-com-p-biblioteka-art-art-krasivo-1.jpg');
}
`;

export const FormThumb = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 13px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 480px;
  margin: auto;
  border: 2px outset black;
  border-radius: 13px;
  padding: 20px 28px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    margin-bottom: 28px;
    padding: 4px 8px;
    border-radius: 22px;
    text-transform: uppercase;
    background-color: rgba(144, 144, 144, 0.8);
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  label {
    font-style: oblique;
    font-weight: 500;
    margin-bottom: 13px;

    b {
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      color: darkred;
      text-transform: lowercase;
    }

    input {
      margin-top: 8px;
      width: 100%;
      padding: 2px 13px;
      border-radius: 13px;
      outline: none;
      text-align: center;
      /* background-color: rgba(255, 255, 255, 0); */
    }
  }
`;

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: midnightblue;
  margin: 22px auto;
  padding: 10px;
  width: 780px;
  height: fit-content;
  border: 4px outset #000;
  border-radius: 13px;
  background-color: rgba(119, 136, 153, 0.8);
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.02em;

  &:active {
    color: midnightblue;
  }

  svg {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  &:hover,
  &:focus {
    background-color: rgba(119, 136, 153, 0.2);
  }
  /* h3 {
    color: midnightblue;
    border: 4px outset midnightblue;
    background-color: lightgoldenrodyellow;
    max-width: max-content;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 28px;
  } */
`;
