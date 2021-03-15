import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingContainer from '../../styles/LoadingContainer';

import { LoadingStyled } from './style';

const Loading = ({ full }) => (
  <LoadingContainer>
    <LoadingStyled full={full}>
      <CircularProgress />
    </LoadingStyled>
  </LoadingContainer>
)

Loading.propTypes = {
  full: PropTypes.bool,
}

export default Loading;