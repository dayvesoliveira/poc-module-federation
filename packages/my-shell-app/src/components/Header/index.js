import React from 'react';
import { AppBar, Box} from '@material-ui/core';
import { HeaderStyled } from './style';

const Header = ({
  title,
  children,
}) => (
  <>
    <AppBar position="static">
      <Box p={1}>
        { children }
      </Box>
    </AppBar>
    <br />
    <header>
      <HeaderStyled>
        {title && <h6>{ title }</h6>}
      </HeaderStyled>
    </header>
  </>
);

Header.defaultProps = {
  title: ''
};

export default Header;