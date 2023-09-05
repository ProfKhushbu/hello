import { useState } from "react";
import Component2 from './Component2.js';
import UserContext from "./UserContext.js";

function Component1() {
  const [user, setUser] = useState("LJU");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

export default Component1