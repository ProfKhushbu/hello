import axios from "axios";
import React,{useState,useEffect} from "react";

const baseURL = "https://dog.ceo/api/breeds/image/random";

export default function App() {
  const [post, setPost] = useState("");
   useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
        console.log(response.data)
        setPost(response.data);
    })
    .catch((error)=>{
      console.error(error);
    });
  });
  return (
    <div>
      <img src={post.message} width="500px" height="500px"/>
    </div>
  );
}
