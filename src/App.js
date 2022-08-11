import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"},
    {id: 2, title: "Sky", body: "I am eagle that rides in the breeze"},
    {id: 3, title: "Forest", body: "He was a SteppenWolf"},
  ]);

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''});
  };

  return (
    <div className="App">
      <form>
        <MyInput
         value={post.title}
         onChange={e => setPost({...post, title: e.target.value})}
         type="text" 
         placeholder="Заголовок поста" />

        <MyInput
         value={post.body}
         onChange={e => setPost({...post, body: e.target.value})}        
         type="text" 
         placeholder="Описание поста" />

        <MyButton onClick={addNewPost} >Create post</MyButton>
      </form>

      <PostList posts={posts} title="Posts List" />
    </div>
  );
}

export default App;
