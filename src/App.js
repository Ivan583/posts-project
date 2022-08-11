import React, { useState } from 'react';
import './App.css';
import PostItem from './components/PostItem';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"},
    {id: 2, title: "Sky", body: "I am eagle that rides in the breeze"},
    {id: 3, title: "Forest", body: "He was a SteppenWolf"},
  ]);

  return (
    <div className="App">
      <h1>My React App</h1>
        {posts.map(post => 
          <PostItem post={post} key={post.id} />
          )}
    </div>
  );
}

export default App;
