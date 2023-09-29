import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthBox = styled.div`
  display: flex;
  gap: 13px;
`;

export const AuthLink = styled(NavLink)`
  gap: 13px;
  font-weight: bold;
  /* margin-bottom: 28px; */
  padding: 4px 8px;
  text-decoration: none;
  border: 2px outset #000;
  border-radius: 22px;
  text-transform: uppercase;
  background-color: rgba(144, 144, 144, 0.8);
  transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

  &:visited {
    color: black;
  }

  &.active,
  &:hover,
  &:focus {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;
