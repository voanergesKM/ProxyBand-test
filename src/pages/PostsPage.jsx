import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import { BiArrowBack } from 'react-icons/bi';
import { PostItem } from '../components/Posts/Post';
import { fetchUserPosts } from '../redux/userPosts/postsOperations';
import { BackButton, Container, PoststList } from './PostsPage.styled';

const spinnerStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const UsersPosts = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const posts = useSelector(state => state.posts.items);
  const isLoading = useSelector(state => state.posts.isLoading);
  const location = useRef(useLocation());

  useEffect(() => {
    dispatch(fetchUserPosts(params.id));
  }, [dispatch, params.id]);

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

      <BackButton to={location.current.state?.from ?? '/'}>
        <BiArrowBack size={20} />
        Go Back to users
      </BackButton>

      {!isLoading && posts && (
        <PoststList>
          {posts.map(item => (
            <PostItem key={item.id} post={item} />
          ))}
        </PoststList>
      )}
    </Container>
  );
};

export default UsersPosts;
