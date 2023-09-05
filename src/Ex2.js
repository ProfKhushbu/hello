
import React, { useState } from "react";
 
function App() {
    const [name, setName] = useState("");
 
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("The browser will not reload when the alert box is closed.");
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Click</button>
        </form>
    );
}
 
export default App;