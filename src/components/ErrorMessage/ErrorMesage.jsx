import React from 'react';
import { Container, Text } from './ErrorMessage.styled';

export const ErrorMesage = () => {
  return (
    <Container>
      <Text>Ups</Text>
      <Text>Something went wrong :(</Text>
      <Text>Please, reload page</Text>
    </Container>
  );
};
