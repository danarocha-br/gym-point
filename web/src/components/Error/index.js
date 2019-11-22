import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Image } from './styles';
import NotFound from '~/assets/404.svg';
import BadRequest from '~/assets/400.svg';

export default function Error({ data, status }) {
  function getStatus() {
    if (status === 400)
      return (
        <>
          <Content>
            <h3>Oh no!</h3>
            <p>
              We could not find any {data}, please check your data and try
              again.
            </p>
          </Content>
          <Image>
            <img src={BadRequest} alt="error 400" />
          </Image>
        </>
      );

    if (status === 500)
      return (
        <>
          <Content>
            <h3>Oh no!</h3>
            <p>
              Something went wrong with our servers, we are looking into it.
            </p>
          </Content>
          <Image>
            {' '}
            <img src={NotFound} alt="error 500" />
          </Image>
        </>
      );
    return (
      <>
        <Content>
          <h3>Oh no!</h3>
          <p>There was a problem in loading the {data}, please try again.</p>
        </Content>
        <Image>
          <img src={NotFound} alt="error 404" />
        </Image>
      </>
    );
  }

  return <Container>{getStatus()}</Container>;
}

Error.propTypes = {
  /**
   * Defines the data the error refers to.
   */
  data: PropTypes.string.isRequired,
  /**
   * Defines the status type from the response.
   */
  status: PropTypes.number.isRequired,
};
