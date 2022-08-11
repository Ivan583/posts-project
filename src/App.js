import React, { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"},
    {id: 2, title: "Sky", body: "I am eagle that rides in the breeze"},
    {id: 3, title: "Forest", body: "He was a SteppenWolf"},
  ]);
 
  const createNewPost = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createNewPost} />

      <PostList posts={posts} title="Posts List" />
    </div>
  );
}

export default App;
