import React, {useState} from 'react';
import {useInput} from './hooks/useInput';

function App() {
    const username = useInput('')
    const password = useInput('')

    return (
        <div>
            <input {...username} type="text" placeholder='Username' />
            <input {...password} type="text" placeholder='Password' />
            <button onClick={() => console.log(username.value)}>Click</button>
        </div>
    );
}

export default App;
