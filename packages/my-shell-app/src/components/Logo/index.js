import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

const LogoContainer = styled.div`
  max-width: 250px;
  width: ${(props) => props.width || '150px'};

  img {
    width: auto;
    height: 50px;
  }
`;

const Logo = (props) => {
  return (
    <LogoContainer {...props}>
      <img alt="logo" src={logo} />
    </LogoContainer>
  );
};

export default Logo;