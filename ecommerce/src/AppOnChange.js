import React from 'react';
import { useState } from 'react';

export const App = () => {
    const [username, setUsername] = useState("");
    const changeHandler = e => {
        setUsername(e.target.value);
    };
    return (
        <div>
            <center>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={changeHandler}
                />
                <h3>{username}</h3>
            </center>
        </div>
    );
};

export default App;