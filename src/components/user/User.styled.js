import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.li`
  padding: 32px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* cursor: pointer; */

  transition: all 250ms linear;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export const UserNameContainer = styled.div`
  text-align: center;
  margin-bottom: 38px;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const UserContactContainer = styled.div`
  margin-bottom: 28px;
  padding: 12px;
`;

export const UserContacts = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  justify-content: center;
  font-size: 20px;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    color: tomato;
  }

  & a {
    text-decoration: none;
    color: inherit;

    &:hover,
    &:focus {
      color: tomato;
    }
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const UserLocationContainer = styled.div`
  margin-bottom: 12px;
  padding: 12px;
`;

export const UserLocation = styled.p`
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  & span {
    margin-right: 12px;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 28px;
`;

export const UserButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 12px;
  border: 1px solid black;
  border-radius: 8px;
  text-decoration: none;
  color: black;
  font-size: 18px;

  transition: all 250ms linear;

  &:hover,
  &:focus {
    border-color: tomato;
    background-color: tomato;
    color: wheat;
  }
`;
