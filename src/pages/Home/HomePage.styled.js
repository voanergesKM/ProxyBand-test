import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  max-width: calc(100vw - 48px);
`;

export const UsersList = styled.ul`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  grid-gap: 16px;
`;
