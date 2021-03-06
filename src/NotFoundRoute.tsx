import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const Wrapper = styled.section`
  padding: 2em;
  background: white;
  border: 5px solid red;;
`;

function NotFoundRoute() {
  return (
    <Wrapper>
      <Title>
        The target Component was not found
      </Title>
      <p>
        I think you have mistyped the path to the component. Should be
        {' '}
        <a href="/plugin/">/plugin/</a>
        .
      </p>
    </Wrapper>
  );
}

export default NotFoundRoute;
