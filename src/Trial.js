import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
        setDate(new Date());
    });
  });

  return <h1>I have rendered {count.toLocaleTimeString()} times!</h1>;
}

export default Timer