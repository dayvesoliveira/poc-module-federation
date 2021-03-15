import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: 500;
  color: #303f9f;
`;

const Loading = ({
  text
}) => (
  <StyledLoading>
    <div>{ text }</div>
  </StyledLoading>
);

Loading.defaultProps = {
  text: 'Loading...'
};

export default Loading;