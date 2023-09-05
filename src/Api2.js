import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData(){
    try {
      const response = axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePostClick = (postId) => {
    const post = posts.find((item) => item.id === postId);
    setSelectedPost(post);
  };

  return (
    <div>
      <h1>JSONPlaceholder API Data</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handlePostClick(post.id)} style={{ cursor: 'pointer' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div>
          <h2>Selected Post:</h2>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
