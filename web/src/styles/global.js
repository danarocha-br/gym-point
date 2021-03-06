import { createGlobalStyle } from 'styled-components';
import { darken, transitions, fluidRange } from 'polished';
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
    width: 100%;
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
    --color-purple: #432f94;
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
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '24px',
        toSize: '42px',
      },
      '320px',
      '991px'
    )}
  }

  h2 {
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '18px',
        toSize: '28px',
      },
      '320px',
      '991px'
    )}
    margin-bottom: 15px;
  }

  h3 {
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '16px',
        toSize: '22px',
      },
      '320px',
      '991px'
    )}
    margin-bottom: 25px;
  }

  h4 {
    ${fluidRange(
      {
        prop: 'font-size',
        fromSize: '13px',
        toSize: '18px',
      },
      '320px',
      '991px'
    )}

  }

  button {
    cursor: pointer;
  }

  input, textarea {
    color: var(--color-grey-dark);
    font-weight: 500;
    border: 1px solid #d9dfe5;
    height: 55px;
    border-radius: 7px;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;

    &::placeholder {
      color: var(--color-grey-md);
      opacity: 0.7;
    }

    &:disabled {
      background-color: #d9dfe5;
    }
  }

  textarea {
    padding: 10px;
    font-size: 16px;
  }

  #root .react-loading-skeleton {
    border-radius: 14px;
    margin-bottom: 5px;
  }
`;
