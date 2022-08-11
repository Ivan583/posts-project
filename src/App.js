import React, { useState } from 'react';
import './App.css';
import Cont from './components/context';
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

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <Cont.Provider value={{removePost}}>
      <div className="App">
        <PostForm create={createNewPost} />

        <div>
          <select>
            <option value="value1">По названию</option>
            <option value="value1">По описанию</option>
          </select>
        </div>

        <PostList
          posts={posts} 
          title="Posts List" />
      </div>
    </Cont.Provider>
  );
}

export default App;
