import React from 'react';
import styled from 'styled-components';
const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section `
  padding: 4em;
  background: papayawhip;
`;
function DefaultRoute() {
    return (React.createElement(Wrapper, null,
        React.createElement(Title, null, "Hello worlds!!")));
}
export default DefaultRoute;
