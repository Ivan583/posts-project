import React, { useContext } from "react";
import MyButton from "./UI/button/MyButton";
import Cont from "./context";

const PostItem = (props) => {
    const {removePost} = useContext(Cont);

    return (
        <div className='post'>
            <div className='post__content'>
            <strong>{props.index}. {props.post.title}</strong>
            <div>
                {props.post.body}
            </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={removePost.bind(null, props.post)} >Remove post</MyButton>
            </div>
      </div>
    );
};

export default PostItem;
