import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { PostItem } from '../components/Posts/Post';
import { fetchUserPosts } from '../redux/userPosts/postsOperations';
import { BackButton, Container, PoststList } from './PostsPage.styled';

export const UsersPosts = () => {
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
      <BackButton to={location.current.state?.from ?? '/'}>
        <BiArrowBack size={20} />
        Go Back to users
      </BackButton>

      <PoststList>
        {!isLoading && posts && posts.map(item => <PostItem key={item.id} post={item} />)}
      </PoststList>
    </Container>
  );
};