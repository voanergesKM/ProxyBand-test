import styled from 'styled-components';

export const PostCard = styled.li`
  max-width: 480px;
  padding: 18px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 0 auto;
  list-style: none;

  :not(:last-child) {
    margin-bottom: 18px;
  }
`;

export const PostTitle = styled.p`
  font-size: 18px;
  margin-bottom: 18px;
  line-height: 1.4;

  & span {
    font-weight: bolder;
    margin-right: 12px;
  }
`;

export const PostDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  & span {
    font-weight: bolder;
    margin-right: 12px;
  }
`;
