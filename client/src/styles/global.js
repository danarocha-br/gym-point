import { createGlobalStyle } from 'styled-components';
import { darken, transitions } from 'polished';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    ${
      '' /* background-image: linear-gradient(-20deg, #e23e77 0%,#ec3650 100%); */
    }
}





  body, input, button {
    font: 1rem 'Rubik', sans-serif;
  }

  :root {
    --color-primary: #EE4D64;
    --color-grey-dark: #282331;
    --color-grey-md: #7d7a88;
    --color-grey-light: #ddd6f3;
    --color-blue: #536cfa;
}

  a {
    color: var(--color-blue);
    text-decoration: none;
    transition: ${transitions('color 1.0s ease-out 1s')};

    &:hover {
      color: ${darken(0.1, '#536cfa')};
    }
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 28px;
  }

  button {
    cursor: pointer;
  }

  input {
    color: var(--color-grey-dark);
    font-weight: 500;
    border: 1px solid #d9dfe5;
    border-radius: 4px;
    height: 50px;
    padding: 0 15px;

    &::placeholder {
      color: var(--color-grey-md);
      font-weight: 400;
    }

  }
`;
