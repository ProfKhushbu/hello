import axios from "axios";
import React from "react";

const baseURL = "https://dog.ceo/api/breeds/image/random";

export default function App() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {

    axios.get(baseURL).then((response) => {

        console.log(response.data)

        setPost(response.data);

    });

  });


  return (

    <div>

      {/* <h1>{post.title}</h1> */}

      <img src={post.message} width="500px" height="500px"/>

    </div>

  );

}

 

//https://apipheny.io/free-api/

