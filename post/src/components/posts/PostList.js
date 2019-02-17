import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <div>
      <div>
        PostList
      </div>
      <Link to='posts/create' className="ui right floated button green">Create Post</Link>
    </div>
  );
};

export default PostList;