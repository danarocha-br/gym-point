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
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: var(--color-grey-dark);
}

  body, input, button {
    font: 1rem 'Rubik', sans-serif;
  }

  :root {
    --color-primary: #EE4D64;
    --color-grey-dark: #282331;
    --color-grey-md: #778899;
    --color-grey-light: #ddd6f3;
    --color-grey-lightest: #f5f7fa;
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
    margin-bottom: 15px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 25px;
  }

  button {
    cursor: pointer;
  }

  input, textarea {
    color: var(--color-grey-dark);
    font-size: 16px;
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

  textarea {
    padding: 10px;
  }



  #root .react-loading-skeleton {
    border-radius: 14px;
    margin-bottom: 5px;
  }
`;
