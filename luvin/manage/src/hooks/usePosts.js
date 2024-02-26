import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import postsState from '../atoms/posts';
import { getPosts } from '../apis/post';

const usePosts = () => {
  const [posts, setPostsState] = useRecoilState(postsState);

  const handleGetPosts = async () => {
    try {
      const data = await getPosts();
      if (data && data.posts) setPostsState(data.posts);
    } catch (error) {}
  };

  useEffect(() => {
    if (!posts.length) handleGetPosts();
  }, []);

  return [posts, setPostsState];
};

export default usePosts;
