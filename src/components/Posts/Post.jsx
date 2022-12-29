import React from 'react';
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
