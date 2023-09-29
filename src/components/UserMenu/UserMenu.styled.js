import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    font-weight: bold;
    /* margin-bottom: 28px; */
    padding: 4px 8px;
    border-radius: 22px;
    text-transform: uppercase;
    background-color: rgba(144, 144, 144, 0.8);
    transition: transform 800ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: black;
      color: white;
      transform: scale(1.1);
    }
  }

  p {
    font-weight: 700;
  }
`;
