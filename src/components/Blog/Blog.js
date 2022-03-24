import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  margin: 0 24px;
`;
const BlogHeader = styled.h2`
  font-size: clamp(2rem, 2vw, 36px);
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 1rem;
`;

const FeaturedPosts = styled.h4`
  color: var(--color-accentPink);
  font-size: clamp(1.5rem, 1.5vw, 32px);
`;
const Blog = () => {
  return (
    <Wrapper>
      <BlogHeader>Blog</BlogHeader>
      <FeaturedPosts>Featured Posts</FeaturedPosts>
    </Wrapper>
  );
};

export default Blog;
