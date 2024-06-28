import React, { useState } from 'react';
import Post from './Components/Post';
import './App.css';
import './Components/Post.css'

function App() {
  const [posts, setPosts] = useState([]);

  const FetchData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>
      {
        setPosts(data);
      })
    .then((err)=>console.log(err))
  }

  return (
    <div className="App">
      <button onClick={FetchData}>GET POSTS</button>
      <div className="posts-container">
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
