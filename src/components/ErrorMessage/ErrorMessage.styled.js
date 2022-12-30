import styled from 'styled-components';

export const Container = styled.div`
  width: 520px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 24px;
  color: tomato;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
