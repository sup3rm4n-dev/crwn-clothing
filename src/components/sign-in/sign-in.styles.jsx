import styled from 'styled-components/macro';

/* CSS */
export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    margin: 10px;
    width: 300px;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (max-width: 400px) {
    margin: 10px;
    width: 300px;
  }
`;
