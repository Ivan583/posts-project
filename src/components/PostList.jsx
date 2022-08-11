import React from "react";
import PostItem from './PostItem';

const PostList = ({posts, title}) => {

    return (
        <div>
            <h1>{ title }</h1>
                {posts.map((post, idn) => 
                <PostItem
                 post={post}
                 index={idn + 1} 
                 key={post.id} />
                )}
        </div>
    );
};

export default PostList;
