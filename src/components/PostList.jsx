import React from "react";
import PostItem from './PostItem';

const PostList = ({posts, title}) => {

    if (!posts.length)
    return (
        <h1>Empty list</h1>
    )

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
