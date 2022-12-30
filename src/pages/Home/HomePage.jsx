import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FadeLoader from 'react-spinners/FadeLoader';
import { ErrorMesage } from '../../components/ErrorMessage/ErrorMesage';

import { User } from '../../components/user/User';

import { fetchAllUsers } from '../../redux/users/usersOperations';
import { Container, UsersList } from './HomePage.styled';

const spinnerStyle = {
  borderColor: 'red',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const usersList = useSelector(state => state.users.items);
  const isLoading = useSelector(state => state.users.isLoading);
  const error = useSelector(state => state.users.error);

  return (
    <Container>
      <FadeLoader
        loading={isLoading}
        cssOverride={spinnerStyle}
        color="#FF6347"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {!isLoading && !error && usersList && (
        <UsersList>
          {usersList.map(item => (
            <User key={item.id} item={item} />
          ))}
        </UsersList>
      )}

      {!isLoading && error && <ErrorMesage />}
    </Container>
  );
};
