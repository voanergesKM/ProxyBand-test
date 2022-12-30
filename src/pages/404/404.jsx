import { HomeLink, PageTitle, Container, Title, Main, MainContainer } from './404.styled';

export const NotFoundPage = () => {
  return (
    <Main>
      <MainContainer
        position="absolute"
        left="50%"
        top="50%"
        maxWidth="520px"
        width="100%"
        lineHeight="1.4"
        textAlign="center"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <Container>
          <PageTitle>Oops!</PageTitle>
          <Title>404 - The Page can't be found</Title>
        </Container>
        <HomeLink to="/">Go TO Homepage</HomeLink>
      </MainContainer>
    </Main>
  );
};
