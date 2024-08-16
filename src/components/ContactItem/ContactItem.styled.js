import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  /* align-items: center; */
  color: black;
  border: 2px outset darkgrey;
  padding: 6px;
  border-radius: 18px;
  cursor: pointer;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.04);
  }
`;

export const ListItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 2px;
  width: 100%;
  color: black;
  text-decoration: none;

  &:visited {
    color: black;
  }

  img {
    display: block;
    margin: 0;
    padding: 0;
    width: 68px;
    height: 68px;
    border-radius: 13px;
    object-fit: cover;
    background-color: #4e4747;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* justify-content: space-between; */
    /* align-items: center; */
    width: 100%;

    span {
      /* display: inline-block; */
      font-size: 18px;
      font-weight: 700;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
        'Lucida Sans', Arial, sans-serif;
      margin-left: 13px;
      margin-right: auto;
    }

    p {
      display: block;
      color: #4e4747;
      font-weight: 800;
      margin-left: 13px;
      margin-right: auto;
    }

    b {
      /* margin-right: 48px; */
      /* color: whitesmoke; */
      color: midnightblue;
    }
  }
`;

export const DelBtnItem = styled.button`
  display: block;
  font-size: 13px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  padding: 2px 8px;
  height: fit-content;
  color: white;
  background-color: black;
  border-radius: 13px;
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: transparent;
    color: buttonborder;
    transform: scale(1.08);
  }
`;
