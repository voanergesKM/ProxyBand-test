import React from 'react';
import PropTypes from 'prop-types';
import { PostCard, PostDescription, PostTitle } from './Post.styled';

export const PostItem = ({ post: { title, body } }) => {
  return (
    <PostCard>
      <PostTitle>
        <span>Title:</span> {title}
      </PostTitle>
      <PostDescription>
        <span>Comment:</span> {body}
      </PostDescription>
    </PostCard>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};
