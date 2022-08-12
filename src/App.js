import React, { useMemo, useState } from 'react';
import './App.css';
import Cont from './components/context';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/select/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"},
    {id: 2, title: "Sky", body: "I am eagle that rides in the breeze"},
    {id: 3, title: "Forest", body: "He was a SteppenWolf"},
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // отсортированный массив
  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts')
    if (selectedSort) {
      return [...posts].sort((a, b) => 
      a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);
 
  const createNewPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
  };

  return (
    <Cont.Provider value={{removePost}}>
      <div className="App">
        <PostForm create={createNewPost} />

        <div>
          <MyInput 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Поиск..." />

          <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Сортировка" 
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]}
             />
        </div>

        <PostList
          posts={sortedPosts} 
          title="Posts List" />
      </div>
    </Cont.Provider>
  );
}

export default App;
