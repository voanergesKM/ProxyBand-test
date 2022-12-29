import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PoststList = styled.ul`
  margin-top: 20px;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: black;
  font-size: 18px;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: tomato;
  }
`;
