import React from 'react';
import './App.css';
import PostItem from './components/PostItem';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
        <PostItem post={{id: 1, title: "Hotel", body: "We are living in the Heart-Break Hotel"}} />
    </div>
  );
}

export default App;
