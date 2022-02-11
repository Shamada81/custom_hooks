import React, {useRef, useState} from 'react';
import useDebounce from "./hooks/useDebounce";


function App() {
    const [ value, setValue ] = useState('');
    const debounceSearch = useDebounce(search, 500);

    function search (query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then(response => response.json())
            .then(json => {
               console.log(json)
            })
    }

    const onChange = (e) => {
        setValue(e.target.value);
        debounceSearch(e.target.value)
    }


    return (
        <div>
            <input type="text" value={value} onChange={ onChange }/>
        </div>
    );
}

export default App;
