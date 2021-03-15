import styled, { css } from 'styled-components';

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9e9e9e;
  width: 100%;
  ${({ full }) =>
    full &&
    css`
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.5);
    `};
`;

export { LoadingStyled };