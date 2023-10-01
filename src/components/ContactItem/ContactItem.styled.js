import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  color: black;
  border: 2px outset darkgrey;
  padding: 2px;
  border-radius: 18px;
  cursor: pointer;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ListItemLink = styled(Link)`
  display: flex;
  width: 100%;
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      display: inline-block;
      font-size: 18px;
      font-weight: 700;
      margin-left: 13px;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-right: auto;
    }

    b {
      margin-right: 48px;
      color: whitesmoke;
    }
  }
`;

export const DelBtnItem = styled.button`
  display: block;
  font-size: 13px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
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
`;
