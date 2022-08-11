import React from "react";
import PostItem from './PostItem';

const PostList = ({posts}) => {

    return (
        <div>
            <h1>My React App</h1>
                {posts.map(post => 
                <PostItem post={post} key={post.id} />
                )}
        </div>
    );
};

export default PostList;
