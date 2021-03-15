import styled, { css } from 'styled-components';

const HeaderStyled = styled.div`
  display: flex;
  position: relative;
  justify-content: left;
  align-items: center;
  color: #fff;
  background-color: #1976d2;
  width: 100%;

  & h6 {
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
`;

export { HeaderStyled };