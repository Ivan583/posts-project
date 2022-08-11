import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
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
    </div>
  );
}

export default App;
