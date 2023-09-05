import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
   useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
        setPost(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
  });
  const handlePostClick = (postId) => {
    const post = post.find((item) => item.id === postId);
    setSelectedPost(post);
  };
  return (
    <div>
{post.map((post)=>{
    <ul>
    <li key={post.id} onClick={() => handlePostClick(post.id)} style={{ cursor: 'pointer' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
          </ul>
    })}
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
