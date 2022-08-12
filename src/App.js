import React, { useState } from 'react';
import './App.css';
import Cont from './components/context';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import { usePosts } from './hooks/usePosts';
import MyModal from './components/UI/modal/MyModal';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"},
    {id: 2, title: "Sky", body: "I am eagle that rides in the breeze"},
    {id: 3, title: "Forest", body: "He was a SteppenWolf"},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
 
  const createNewPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <Cont.Provider value={{removePost}}>
      <div className="App">
        <MyModal>
          <PostForm create={createNewPost} />
        </MyModal>        

        <PostFilter filter={filter} setFilter={setFilter} />

        <PostList
          posts={sortedAndSearchedPosts} 
          title="Posts List" />
      </div>
    </Cont.Provider>
  );
}

export default App;
