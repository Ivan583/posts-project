import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"},
    {id: 2, title: "Sky", body: "I am eagle that rides in the breeze"},
    {id: 3, title: "Forest", body: "He was a SteppenWolf"},
  ]);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Заголовок поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton>Create post</MyButton>
      </form>

      <PostList posts={posts} title="Posts List" />
    </div>
  );
}

export default App;
