import React from "react";

const PostItem = () => {


    return (
        <div className='post'>
            <div className='post__content'>
            <strong>1. JavaScript</strong>
            <div>
                JavaScript - this is fine!
            </div>
            </div>
            <div className='post__btns'>
                <button>Remove post</button>
            </div>
      </div>
    );
};

export default PostItem;