import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import Logo from '../../components/Logo';

const ContainerShell = ({ children }) => (
  <div>
      <Header>
        <Logo width="100px" />
      </Header>
      <Container>
        { children }
      </Container>
    </div>
);

export default ContainerShell;