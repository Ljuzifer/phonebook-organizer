import { styled, createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: url('https://bogatyr.club/uploads/posts/2023-03/1679420906_bogatyr-club-p-biblioteka-oboi-foni-pinterest-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow-x: hidden;

  scroll-behavior: smooth;
  transition: 2500ms;

  &::-webkit-scrollbar {
    appearance: none;
    background: transparent;
    width: 0;
    /* height: 0; */
  }

  /* .main{
      transform: scale(0.2);
      transition: transform 800 ease-in-out;

      &:hover{
        transform: scale(1.2);
      }
  } */
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}
`;

export const Box = styled.div`
  margin: 22px auto;
  padding: 40px;
  width: 780px;
  height: fit-content;
  border: 4px outset #000;
  border-radius: 13px;
  background-color: rgba(119, 136, 153, 0.8);
  text-align: center;
  /* animation: start 2s;

  @keyframes start {
    from {
      height: 0;
    }
    to {
      height: fit-content;
    }
  } */

  h1,
  h2 {
    color: midnightblue;
    border: 4px outset midnightblue;
    background-color: lightgoldenrodyellow;
    max-width: max-content;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 28px;
  }

  b {
    color: midnightblue;
    font-size: 15px;
  }
`;
