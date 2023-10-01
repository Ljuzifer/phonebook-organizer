import { styled } from 'styled-components';

export const EditForm = styled.form`
  display: flex;
  gap: 13px;
  background-color: rgba(202, 202, 202, 0.8);
  width: 100%;
  margin: auto;
  border: 2px outset black;
  border-radius: 13px;
  padding: 20px;
  margin-bottom: 28px;

  button {
    font-weight: bold;
    width: 120px;
    height: 48px;
    padding: 4px 8px;
    border-radius: 13px;
    text-transform: uppercase;
    background-color: rgba(144, 144, 144, 0.8);
  }

  button:hover,
  button:focus {
    background-color: black;
    color: white;
  }

  input {
    /* margin-top: 8px; */
    width: 100%;
    padding: 2px 13px;
    border-radius: 13px;
    outline: none;
    /* text-align: center; */
    /* background-color: rgba(255, 255, 255, 0); */
  }
`;
