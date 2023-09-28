import styled from 'styled-components';

export const List = styled.ul`
  width: 666px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: auto;
  font-weight: 500;
  /* font-style: oblique; */

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    border: 2px outset darkgrey;
    padding: 2px;
    padding-left: 8px;
    border-radius: 18px;
    cursor: pointer;
    transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.1);
    }

    span {
      font-size: 18px;
      font-weight: 700;
      margin-left: 13px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-right: auto;
    }

    div {
      display: flex;
      align-items: center;
    }

    div span {
      color: whitesmoke;
      /* padding: 2px; */
    }

    button {
      font-size: 13px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-left: 40px;
      padding: 2px 8px;
      color: white;
      background-color: black;
      border-radius: 13px;
      transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background-color: transparent;
        color: buttonborder;
        transform: scale(1.2);
      }
    }
  }
`;
