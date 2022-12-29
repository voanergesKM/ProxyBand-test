import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../components/user/User';

import { fetchAllUsers } from '../redux/users/usersOperations';
import { Container, UsersList } from './HomePage.styled';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const usersList = useSelector(state => state.users.items);
  const isLoading = useSelector(state => state.isLoading);

  return (
    <Container>
      <UsersList>
        {!isLoading && usersList && usersList.map(item => <User key={item.id} item={item} />)}
      </UsersList>
    </Container>
  );
};
